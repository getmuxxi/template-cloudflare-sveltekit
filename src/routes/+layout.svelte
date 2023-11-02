<script lang="ts">
	import '../app.css';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import {
		DarkMode,
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		Drawer,
		CloseButton,
		SidebarDropdownWrapper
	} from 'flowbite-svelte';
	import { Section } from 'flowbite-svelte-blocks';
	import { Cog } from 'svelte-heros-v2';
	import { sineIn } from 'svelte/easing';

	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};
	export let data: PageData;

	let breakPoint: number = 1024;
	let width: number;
	let backdrop: boolean = false;
	let activateClickOutside = true;
	let drawerHidden: boolean = false;
	$: if (width >= breakPoint) {
		drawerHidden = false;
		activateClickOutside = false;
	} else {
		drawerHidden = true;
		activateClickOutside = true;
	}
	onMount(() => {
		if (width >= breakPoint) {
			drawerHidden = false;
			activateClickOutside = false;
		} else {
			drawerHidden = true;
			activateClickOutside = true;
		}
	});
	const toggleSide = () => {
		if (width < breakPoint) {
			drawerHidden = !drawerHidden;
		}
	};
	const toggleDrawer = () => {
		drawerHidden = false;
	};
	$: activeUrl = $page.url.pathname;
</script>

<svelte:window bind:innerWidth={width} />
<header class="flex-none w-full mx-auto bg-white dark:bg-slate-950">
	<Navbar let:hidden let:toggle>
		<NavHamburger
			on:click={toggleDrawer}
			btnClass="focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 m-0 mr-3 lg:hidden"
		/>
		<NavBrand href="/" class="lg:ml-64">
			<Cog />
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-4">
				Muxxi
			</span>
		</NavBrand>
		<NavUl {activeUrl} {hidden}>
			<NavLi class="lg:px-2 lg:mb-0" href="/">Home</NavLi>
			<NavLi class="lg:px-2 lg:mb-0" href="/about">About</NavLi>
			<NavLi
				class="lg:px-2 lg:mb-0"
				href="https://github.com/getmuxxi/template-cloudflare-sveltekit"
				>GitHub</NavLi
			>
		</NavUl>
		<div class="flex items-center ml-auto">
			<DarkMode class="inline-block dark:hover:text-white hover:text-gray-900" />
		</div>
		<NavHamburger on:click={toggle} btnClass="lg:hidden" />
	</Navbar>
</header>

<Drawer
	transitionType="fly"
	{backdrop}
	{transitionParams}
	bind:hidden={drawerHidden}
	bind:activateClickOutside
	width="w-64"
	class="overflow-scroll pb-32 z-30"
	id="sidebar"
>
	<div class="flex items-center">
		<CloseButton on:click={() => (drawerHidden = true)} class="mb-4 dark:text-white lg:hidden" />
	</div>
	<Sidebar {activeUrl} asideClass="w-54">
		<SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
			<SidebarGroup>
				<SidebarItem label="About" href="/about" on:click={toggleSide} />
				<SidebarItem label="API Random" href="/api/random" on:click={toggleSide} />
			</SidebarGroup>

			<!--
			<SidebarGroup>
				<SidebarDropdownWrapper label="Admin">
					<SidebarItem label="Admin" href="/admin/" on:click={toggleSide} />
					<SidebarItem label="Some Page" href="/admin/somepage" on:click={toggleSide} />
				</SidebarDropdownWrapper>
			</SidebarGroup>
			-->
		</SidebarWrapper>
	</Sidebar>
</Drawer>

<Section name="content">
	<div class="flex px-4 mx-auto w-full">
		<main class="lg:ml-72 w-full mx-auto">
			<slot />
		</main>
	</div>
</Section>
