# Starter Template for SvelteKit on Cloudflare Pages

Use this template / starter kit to quickly deploy a UI and/or API
on Cloudflare Pages.

## Features

- SvelteKit for UI & API endpoints
- Svelte Cloudflare adapter for deploying to Cloudflare Pages
- Typescript
- Tailwind + Flowbite for CSS
- ESLint + Prettier for code formatting
- Playwright + VITest for testing
- Auto deploy when code is pushed to github
- Cloudflare ENV for configuration settings
- Cloudflare KV & DurableObjects for storing data


## Creating a project from this template

Fork this repo or follow the steps below to recreate from scratch.

### Setup Steps:

Clone this repo as a [template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)

- Click on "Use this template" button in [github](https://github.com/getmuxxi/template-cloudflare-sveltekit)
- OR
- `gh repo create <new-repo-name> --template=getmuxxi/template-cloudflare-sveltekit`

Or follow the steps at the bottom of this guide to recreate from scratch.

Then...

1. Clone new repo to local disk `git clone git@github.com:<new-repo>`
1. Create a new Pages project in Cloudflare
  1. Setup to auto deploy from Github
1. Edit the code
1. `git push` to deploy


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
npm install -D flowbite-svelte flowbite-svelte-blocks flowbite-svelte-icons svelte-heros-v2

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



## Guides & Resources

- [Deploying Svelte on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-svelte-site/)
- [Adding Tailwind and DaisyUI](https://dev.to/brewhousedigital/adding-tailwind-and-daisy-ui-to-sveltekit-2hk5)
- [Flowbite SvelteKit Responsive Sidebar Layout](https://github.com/shinokada/flowbite-sveltekit-responsive-sidebar-layout/blob/main/src/routes/%2Blayout.svelte)

```js
// Example accessing data stored in Cloudflare
// Needs to be configured in app.d.ts first
const counter = platform.env.COUNTER.idFromName("A");
```




