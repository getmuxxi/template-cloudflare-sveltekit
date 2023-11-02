<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="prose dark:prose-invert">
	<h1>About this app</h1>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<pre>npm create svelte@latest</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<table>
		<thead><tr><th>Wrestler</th> <th>Origin</th> <th>Finisher</th></tr></thead>
		<tbody>
			<tr><td>Bret “The Hitman” Hart</td> <td>Calgary, AB</td> <td>Sharpshooter</td></tr>
			<tr><td>Stone Cold Steve Austin</td> <td>Austin, TX</td> <td>Stone Cold Stunner</td></tr>
			<tr><td>Randy Savage</td> <td>Sarasota, FL</td> <td>Elbow Drop</td></tr>
			<tr><td>Vader</td> <td>Boulder, CO</td> <td>Vader Bomb</td></tr>
			<tr><td>Razor Ramon</td> <td>Chuluota, FL</td> <td>Razor’s Edge</td></tr>
		</tbody>
	</table>

	{#each Array(20) as _, i}
		<h2>{i + 1}. Paragraph</h2>
		<p>
			The page you're looking at is purely static HTML, with no client-side interactivity needed.
			Because of that, we don't need to load any JavaScript. Try viewing the page's source, or
			opening the devtools network panel and reloading.
		</p>
	{/each}
</div>
