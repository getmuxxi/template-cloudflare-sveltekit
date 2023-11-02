<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import {
		DarkMode,
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Img,
	} from 'flowbite-svelte';

	$: activeUrl = $page.url.pathname;
</script>

<header class="flex-none w-full mx-auto bg-white dark:bg-slate-950">
	<Navbar>
		<NavBrand href="/">
			<Img src="/images/muxxi_logo.svg" alt="Muxxi" class="mr-3 h-6 sm:h-9" />
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Muxxi</span>
		</NavBrand>
		<div class="flex md:order-2">
			<DarkMode class="inline-block dark:hover:text-white hover:text-gray-900" />
			<NavHamburger />
		</div>
		<NavUl class="order-1">
			<NavLi href="/" active={true}>Home</NavLi>
			<NavLi href="/about">About</NavLi>
			<NavLi href="https://github.com/getmuxxi/template-cloudflare-sveltekit">Github</NavLi>
			<NavLi href="/api/random">API Example</NavLi>
		</NavUl>
	</Navbar>
</header>

<div name="content" class="flex px-4 mx-auto w-full">
	<main class="lg:ml-72 w-full mx-auto">
		<slot />
	</main>
</div>
