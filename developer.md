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

Create `.env.local` in the project root and set the following variables. Use credentials from your own Clerk and PocketBase projects; do not commit this file.

```dotenv
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
POCKETBASE_URL=
POCKETBASE_SUPERUSER_EMAIL=
POCKETBASE_SUPERUSER_PASSWORD=
```

The PocketBase superuser credentials are used by server-side code. Keep them private and do not add a `NEXT_PUBLIC_` prefix.

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
