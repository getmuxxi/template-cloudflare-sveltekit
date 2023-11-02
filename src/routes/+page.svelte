<script>
	import { Img, Heading, Card, P, Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<Heading class="p-8" tag="h1" customSize="text-3xl">Flowbite Layout Template</Heading>


<Card>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">This page is a Svelte page with Flowbite + Tailwind</h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Refer to the Flowbite Svelete docs for examples of UI elements.</p>
  <Button href="https://flowbite-svelte.com/docs/pages/introduction" class="w-fit">
    Flowbite Svelte Docs <ArrowRightOutline class="w-3.5 h-3.5 ml-2 text-white" />
  </Button>
</Card>

