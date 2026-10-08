# Developer Guide

## Requirements

- Node.js and npm
- A terminal opened in the project directory

## Install dependencies

From the project root, run:

```bash
npm i
```

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
