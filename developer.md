# Developer Guide

## Requirements

- Node.js and npm
- A PocketBase instance
- Clerk credentials for authentication

## Install dependencies

From the project root, run:

```bash
npm install
```

## Configure environment variables

Copy `.env.example` to `.env.local` in the project root and fill in the values from your Clerk, PocketBase, and Bunny.net accounts. Do not commit `.env.local`.

```bash
cp .env.example .env.local
```

The PocketBase superuser credentials and Bunny Storage password are used by server-side code. Keep them private and do not add a `NEXT_PUBLIC_` prefix.

## Start the development server

Run:

```bash
npm run dev
```

Open the local address printed in the terminal. By default, the app is available at [http://localhost:3000](http://localhost:3000). If that port is already in use, Next.js will select another port and print its address.

To stop the development server, press `Ctrl+C` in the terminal where it is running.

## Other project commands

```bash
npm run lint   # Check the code with ESLint
npm run build  # Build the app for production
npm start      # Start the production build (run npm run build first)
```

## TODO

- Add tests for the product image dropzone: choosing or dropping an image, rejecting non-image files, showing the preview, and clearing the selection after reset or successful submission.

## Main pages

- `/` — Home
- `/dashboard` — Dashboard
- `/search` — Search
- `/profile` — Profile
- `/sign-in` and `/sign-up` — Clerk authentication
- `/recipe` — Recipe form
- `/products-test` — Product form and listing
- `/linus` — About Linus Torvalds

## Data and authentication

The app uses Clerk for authentication and PocketBase for persistence. Set `POCKETBASE_URL` to the PocketBase server address. The server-side database helper authenticates with the configured PocketBase superuser, so never expose those credentials in browser code. Server actions should check the Clerk user before reading or changing user-owned records.

PocketBase collections and fields must match the names used in the app and its migrations under `pb_migrations/`. When changing a collection or field, update the migration and the app code together.

## Lab reports and submissions

Lab reports and PDFs are in [`docs/`](./docs).
