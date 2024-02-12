<script lang="ts">
	import Nested from '../components/Nested.svelte';
	import Button from '../components/Button.svelte';
	import Arrays from '../components/Arrays.svelte';
	import Html from '../components/Html.svelte';
	import Package from '../components/Package.svelte';
	import Loop from '../components/Loop.svelte';
	import Async from '../components/Async.svelte';
	import Events from '../components/Events.svelte';
	import Outer from '../components/Outer.svelte';
	import TextInput from '../components/TextInput.svelte';
	import NumericInputs from '../components/NumericInputs.svelte';
	import CheckboxInput from '../components/CheckboxInput.svelte';
	import Select from '../components/Select.svelte';
	import GroupInputs from '../components/GroupInputs.svelte';
	import SelectMultiple from '../components/SelectMultiple.svelte';

	const name = 'Svelte';
	const src = 'https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif';
	const alt = 'Homer hiding';
	const pkg = {
		name: 'Svelte',
		speed: 'blazing',
		version: 3,
		website: 'https://svelte.dev'
	};

	function handleHello(event: CustomEvent<{ name: string }>) {
		alert(`Hello, ${event.detail.name}!`);
	}

	function handleMessage(event: CustomEvent<{ value: string }>) {
		alert(`The message is: ${event.detail.value}`);
	}
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
	<Package {...pkg} />
	<Loop />
	<Async />
	<Events on:hello={handleHello} />
	<Outer on:message={handleMessage} />
	<TextInput />
	<NumericInputs />
	<CheckboxInput />
	<Select />
	<GroupInputs />
	<SelectMultiple />
</main>

<style>
	main {
		display: grid;
		align-content: center;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 15px;
		min-height: 100vh;
		text-align: center;
		padding: 25px;
	}

	h1 {
		color: red;
		grid-column: 1/-1;
	}

	.homer-image {
		width: 250px;
		border-radius: 10px;
	}
</style>
