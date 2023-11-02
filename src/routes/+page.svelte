<script>
	import { Img, Heading, P, A, Li } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<Img src="/images/muxxi_logo.svg" alt="Muxxi" class="w-24 mx-10" />

<Heading class="p-8" tag="h1" customSize="text-3xl">Flowbite Layout Template</Heading>

<P class="px-8 py-4">
	This page is rendered using Flowbite + Tailwind.
</P>

<P class="px-8 py-4">
	<Li><A class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://flowbite-svelte.com/docs/pages/introduction">Flowbite Svelte Docs</A></Li>
	<Li><A class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://flowbite-svelte-blocks.vercel.app/">Flowbit Svelte blocks</A></Li>
</P>


<Img src="/images/muxxi_logo.svg" alt="Muxxi" size="max-w-xs" alignment="my-40 mx-auto" />
