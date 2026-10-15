# Developer Guide

## Requirements

- Node.js and npm
- A terminal opened in the project directory

## Install dependencies

From the project root, run:

```bash
npm i
```

## Install Skeleton for Next.js

Skeleton's Next.js setup requires Next.js 15 or later, React 18 or later, and Tailwind CSS 4. This project already meets those requirements.

Install Skeleton's core and React component packages from the project root:

```bash
npm i -D @skeletonlabs/skeleton @skeletonlabs/skeleton-react
```

At the top of `app/globals.css`, add the Skeleton imports after the Tailwind import and before the app's custom styles:

```css
@import 'tailwindcss';
@import '@skeletonlabs/skeleton';
@import '@skeletonlabs/skeleton-react';
@import '@skeletonlabs/skeleton/themes/cerberus';
```

Set the active theme on the root HTML element in `app/layout.tsx`:

```tsx
<html lang="en" data-theme="cerberus">
```

Then start the app with `npm run dev` and open the local address printed in the terminal. See the [Skeleton Next.js installation guide](https://www.skeleton.dev/docs/svelte/get-started/installation/nextjs) for details and other themes.

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
- `/search` — Search
- `/profile` — Profile
- `/linus` — About Linus Torvalds
