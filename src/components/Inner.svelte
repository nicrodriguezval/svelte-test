<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sayHello() {

		dispatch('message', { value: 'This is a message' });

	}
</script>

<section>
	<h3>Inner component</h3>

	<button on:click={sayHello}>
		Get message
	</button>
</section>