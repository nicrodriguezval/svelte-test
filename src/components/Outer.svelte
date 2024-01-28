<script>
	import Inner from "./Inner.svelte";

</script>

<section>
	<h3>Outer component</h3>

	<Inner on:message />
</section>