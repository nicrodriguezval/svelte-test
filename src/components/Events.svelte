<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sayHello() {
		dispatch('hello', { name: 'world' });
	}
</script>

<section>
	<h3>Events component</h3>

	<button on:click={sayHello}>
		Say hello
	</button>
</section>