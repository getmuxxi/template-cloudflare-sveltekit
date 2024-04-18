# Starter Template for SvelteKit on Cloudflare Pages

Use this template / starter kit to quickly deploy a UI or API on Cloudflare Pages.

[Demo](https://template-cloudflare-sveltekit.pages.dev/) - Cloudflare worker

## Features

- SvelteKit for UI & API endpoints
- Svelte Cloudflare adapter for deploying to Cloudflare Pages
- Tailwind + Flowbite + PostCSS for UI elements
- Flowbite Svelte Icons and Svelte Heros v2 for icons
- Typescript for code
- ESLint + Prettier for code formatting
- Playwright + VITest for testing
- Auto deploy when code is pushed to github
- Cloudflare ENV for configuration settings
- Cloudflare KV & DurableObjects for storing data

> Flowbite API is subject to change. Best practice is to update the flowbite packages and
> refer to documentation when creating a new project.

# TODO

- [ ] Add [OAuth API endpoints](https://blog.cloudflare.com/oauth-2-0-authentication-server/) to make template useful as a GHL app


# Getting Started

Clone this repo as a [template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) or [recreate from scratch](#recreating-from-scratch).

### Cloning Options:

Choose one of these methods:

- Click on "Use this template" button in [github](https://github.com/getmuxxi/template-cloudflare-sveltekit)
- `gh repo create <new-repo-name> --template=getmuxxi/template-cloudflare-sveltekit`
- Clone this repo

### Setup Steps:

1. Clone new repo to local disk `git clone git@github.com:<new-repo>`
1. Create a new Pages project in Cloudflare
  1. Setup to auto deploy from Github
1. Edit the code
1. `git push` to deploy

```bash
# after cloning repo
npm install

# create .svelte-kit dir with tsconfig.json
npm run check
```

## Developing

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.


## Deploying

`git push` to github

Cloudflare Pages will auto build and deploy when configured properly.


# Documentation

Cloudflare

- [Deploying Svelte on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-svelte-site/)

Tailwind & Flowbite

- [Flowbite Svelte Docs](https://flowbite-svelte.com/docs/pages/introduction)
- [Flowbite Svelte blocks](https://flowbite-svelte-blocks.vercel.app/)
- [Flowbite Svelte Icons](https://flowbite-svelte.com/docs/extend/icons)
- [Svelte Heros Icons v2](https://svelte-heros-v2.vercel.app/)

- [Flowbite SvelteKit Responsive Sidebar Layout](https://flowbite-svelte.com/docs/examples/sidebar-layout)
- [Adding Tailwind and DaisyUI](https://dev.to/brewhousedigital/adding-tailwind-and-daisy-ui-to-sveltekit-2hk5)

```js
// Example accessing data stored in Cloudflare
// Needs to be configured in app.d.ts first
const counter = platform.env.COUNTER.idFromName("A");
```


# Recreating from Scratch

Follow the steps below to recreate this template from scratch.

## Step 1: Add npm packages

```bash
# Install sveltekit
npm create svelte@latest NEW-APP-NAME
# Select:
# - Sveltekit demo app
# - Typscript
# - ESlint + Prettier + Playwright + VITest

# Install the cloudflare pages adapter
npm install --save-dev @sveltejs/adapter-cloudflare

# Install tailwind and flowbite
npm install -D tailwindcss postcss autoprefixer @tailwindcss/typography
npm install -D flowbite-svelte flowbite-svelte-icons svelte-heros-v2

# Optionally install mdsvex for markdown support
npm install -D mdsvex
```

## Step 2: Configure

1. Configure svelte.config.js
1. Add support for Cloudflare KV or DurableObjects in app.d.ts
1. Initialize tailwind config (see below)

### Configuring tailwind

1. `npx tailwindcss init tailwind.config.cjs -p`
1. Configure tailwind.config.cjs
1. Create src/app.css with tailwind imports

## Step 3: Copy Layouts

1. Copy src/app.html to enable dark mode class
1. Copy src/+layout.svelte to setup a basic flowbite page layout






