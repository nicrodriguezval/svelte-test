<script>
	import { marked } from 'marked';

	let value = 'Some words are *italic*, some are **bold**';
</script>

<section>
	<h3>TextareaInputs component</h3>

	<label for="ta">Input</label>
	<textarea id="ta" bind:value />

	<p>Output:</p>
	<article>
		<div>{@html marked(value)}</div>
	</article>
</section>

<style>
	article {
		text-align: left;
	}
</style>
