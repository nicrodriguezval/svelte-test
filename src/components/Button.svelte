<script>
	let count = 0;
	// reactivity
	$: doubled = count * 2;
	$: {
		console.log(`the count is ${count}`);
		console.log(`doubled is ${doubled}`);
	}
	$: if (count >= 20) {
		alert(`count is dangerously high!`);
		count = 0;
	}

	function handleClick() {
		count += 1;
	}
</script>

<section>
	<h3>Button component</h3>

	<button on:click={handleClick}>
		Count click
	</button>

	<button on:click|once={handleClick}>
		Onetime count click
	</button>

	<p>
		Clicked {count === 1 ? 'time' : 'times'}
	</p>
	<p>{count} doubled is {doubled}</p>

	<div>
		{#if count > 10}
			<p>{count} is greater than 10</p>
		{:else if count < 5}
			<p>{count} is less than 5</p>
		{:else}
			<p>{count} is between 5 and 10 inclusive</p>
		{/if}
	</div>
</section>

<style>
	button {
		width: 200px;
	}
</style>