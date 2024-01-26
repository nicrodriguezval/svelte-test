<script>
	let count = 0;
	// reactivity
	$: doubled = count * 2;
	$: {
		console.log(`the count is ${count}`);
		console.log(`doubled is ${doubled}`);
	}
	$: if (count >= 10) {
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
		Clicked {count}
		{count === 1 ? 'time' : 'times'}
	</button>

	<p>{count} doubled is {doubled}</p>
</section>
