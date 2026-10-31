import {authenticate} from '@/lib/database'
import { auth } from '@clerk/nextjs/server';
import { pbkdf2 } from 'crypto';
import { revalidatePath } from 'next/cache';

export async function createPost(formData: FormData) {

  'use server'
  const session = await auth()

  const title = formData.get('title')
  const content = formData.get('content')

  // Mutate data
  // Revalidate cache
}


export async function deletePost(formData: FormData) {
  'use server'
  const db = await authenticate()

  const id = formData.get('id')

  // Verify the user owns this resource before deleting
  // Mutate data
  // Revalidate cache
}


export async function getProducts(){
  const {userId} = await auth();

  if (!userId) throw new Error("Unauthorized");

  const db = await authenticate();

  return db.collection('Products').getFullList({
    sort: '-created',
    filter: db.filter('clerkUserId = {:userId}', { userId }),
  });
}

export async function createProduct(formData: FormData) {
  'use server'

  const { userId } = await auth();
  if (!userId) throw new Error("You must be logged in to create a product");

  const name = String(formData.get("name") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const priceValue = String(formData.get("price") ?? "").trim();
  const price = Number(priceValue);

  if (!name || !description || !priceValue || !Number.isFinite(price) || price < 0) {
    throw new Error("Enter a name, description, and valid non-negative price");
  }

  const db = await authenticate();
  await db.collection("Products").create({
    Name: name,
    description,
    price,
    clerkUserId: userId,
  });

  revalidatePath("/products-test");
}

export async function deleteProduct(formData: FormData) {
  "use server";

  const { userId } = await auth();
  if (!userId) throw new Error("You must be logged in to delete a product.");

  const value = formData.get("id");
  const id = typeof value === "string" ? value.trim() : "";
  if (!id) throw new Error("Product ID is required.");

  const db = await authenticate();
  const product = await db.collection("Products").getOne(id);

  if (product.clerkUserId !== userId) {
    throw new Error("You are not allowed to delete this product.");
  }

  await db.collection("Products").delete(id);
  revalidatePath("/products-test");
}

export async function editProduct(formData: FormData) {
  "use server";

  const { userId } = await auth();
  if (!userId) throw new Error("You must be logged in to edit a product.");

  const idValue = formData.get("id");
  const id = typeof idValue === "string" ? idValue.trim() : "";
  const name = String(formData.get("name") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const priceValue = String(formData.get("price") ?? "").trim();
  const price = Number(priceValue);

  if (!id) throw new Error("Product ID is required.");
  if (!name || !description || !priceValue || !Number.isFinite(price) || price < 0) {
    throw new Error("Enter a name, description, and valid non-negative price.");
  }

  const db = await authenticate();
  const product = await db.collection("Products").getOne(id);

  if (product.clerkUserId !== userId) {
    throw new Error("You are not allowed to edit this product.");
  }

  await db.collection("Products").update(id, {
    Name: name,
    description,
    price,
  });

  revalidatePath("/products-test");
}
