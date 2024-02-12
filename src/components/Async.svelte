<script lang="ts">
	import { onMount } from 'svelte';
	import { getRandomNumber } from '../utils/index.ts';

	let promise: Promise<number>;

	onMount(() => {
		promise = getRandomNumber();
	});
</script>

<section>
	<h3>Async component</h3>

	{#await promise}
		<p>Waiting for promise to resolve...</p>
	{:then number}
		<p>The number is {number}</p>
	{:catch error}
		<p style="color: red;">{error.message}</p>
	{/await}
</section>
