<script>
	import Nested from '../components/Nested.svelte';
	import Button from '../components/Button.svelte';
	import Arrays from '../components/Arrays.svelte';
	import Html from '../components/Html.svelte';

	const name = 'Svelte';
	const src = 'https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif';
	const alt = 'Homer hidding';
</script>

<main>
	<h1>Test</h1>
	<section>
		<h3>Main component</h3>
		<p>Hello, {name.toUpperCase()}!</p>
		<img class="homer-image" {src} {alt} />
	</section>
	<Nested />
	<Nested answer="in your heart" />
	<Html />
	<Button />
	<Arrays />
</main>

<style>
	main {
		display: grid;
		place-content: center;
		gap: 7px;
		min-height: 100vh;
		text-align: center;
	}

	h1 {
		color: red;
	}

	.homer-image {
		width: 250px;
		border-radius: 10px;
	}
</style>
