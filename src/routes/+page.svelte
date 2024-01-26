<script>
	import Nested from '../components/Nested.svelte';
	import Button from '../components/Button.svelte';

	const name = 'Svelte';
	const src = 'https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif';
	const alt = 'Homer hidding';
</script>

<main>
	<h1>Test</h1>
	<h2>Hello, {name.toUpperCase()}!</h2>
	<img {src} {alt} />
	<Nested />
	<Button />
</main>

<style>
	main {
		display: grid;
		place-content: center;
		min-height: 100vh;
		text-align: center;
	}

	h1 {
		color: red;
	}
</style>
