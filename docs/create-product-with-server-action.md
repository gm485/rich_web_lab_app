# Create a product with a Server Action

This guide shows a native Next.js form that sends product data to a Server Action. The action checks the signed-in Clerk user, validates the fields on the server, and creates the PocketBase record with that user's ID. The browser never receives PocketBase superuser credentials.

## 1. Check the PocketBase collection

In PocketBase, make sure the collection is named `products` (lowercase) and has these fields:

- `name` — text
- `description` — text
- `price` — number
- `userId` — text

The `userId` field stores the Clerk user ID. The action sets this itself; do not accept it from the form.

## 2. Create a fresh admin PocketBase client for each operation

Replace the shared authenticated client in `lib/database.tsx` with a factory:

```ts
import "server-only";
import PocketBase from "pocketbase";

export async function createAdminDb() {
  const db = new PocketBase(process.env.POCKETBASE_URL!);

  await db.collection("_superusers").authWithPassword(
    process.env.POCKETBASE_SUPERUSER_EMAIL!,
    process.env.POCKETBASE_SUPERUSER_PASSWORD!
  );

  return db;
}
```

Keep these environment variables server-side only. Do not prefix them with `NEXT_PUBLIC_`.

## 3. Add the Server Action

In `lib/actions.ts`, remove the unused `NextRequest`, `getProduct`, `createPost`, `deletePost`, and old `getProducts` imports/functions if you are replacing those placeholders. Add this action:

```ts
"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createAdminDb } from "@/lib/database";

export async function createProduct(formData: FormData) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("You must be signed in to create a product.");
  }

  const name = String(formData.get("name") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const priceValue = String(formData.get("price") ?? "").trim();
  const price = Number(priceValue);

  if (!name || !description || !priceValue || !Number.isFinite(price) || price < 0) {
    throw new Error("Enter a name, description, and valid non-negative price.");
  }

  const db = await createAdminDb();

  await db.collection("products").create({
    name,
    description,
    price,
    userId,
  });

  revalidatePath("/products-test");
  redirect("/products-test");
}
```

The action rechecks authentication because Server Actions can be called directly over the network, not only by submitting your page's form. It also derives `userId` from Clerk instead of trusting a form value.

## 4. Make a page with the form

Create `app/products/new/page.tsx`:

```tsx
import { createProduct } from "@/lib/actions";

export default function NewProductPage() {
  return (
    <main>
      <h1>Add a product</h1>

      <form action={createProduct}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />

        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" required />

        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          type="number"
          min="0"
          step="0.01"
          required
        />

        <button type="submit">Create product</button>
      </form>
    </main>
  );
}
```

The `name` attributes (`name`, `description`, and `price`) must match the keys read by `formData.get(...)` in the action. This page can remain a Server Component; a native form with an `action` prop does not need `useState` or a client component.

## 5. Test it

1. Start the app with `npm run dev`.
2. Sign in with Clerk.
3. Open `/products/new` and submit a product.
4. The action redirects to `/products-test`; check that the product appears there.
5. Check the PocketBase record and confirm its `userId` is the Clerk ID for the signed-in account.
6. Try submitting while signed out; the action should reject the request.

Your products page should query the lowercase `products` collection and filter by the current Clerk `userId`. The superuser query bypasses PocketBase collection rules, so enforce ownership in every server-side read, update, and delete operation.

## If you want to keep React Hook Form

The example above uses a native form to keep the Server Action wiring simple. A React Hook Form `onSubmit` handler does not submit through `<form action={createProduct}>` automatically. To keep React Hook Form, make the form a Client Component, validate and collect its values there, then call the Server Action with a `FormData` object (or change the action to accept a typed object). Keep all authentication checks and PocketBase writes inside the Server Action.
