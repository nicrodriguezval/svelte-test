<script>
	let numbers = [1, 2, 3, 4, 5];
	$: sum = numbers.reduce((t, n) => t + n, 0);

	function addNumber() {
		numbers.push(numbers.length + 1);
		numbers = numbers; // this way don't allocate a new array in heap memory
	}
</script>

<section>
	<h3>Arrays component</h3>
	<p>{numbers.join(', ')} = {sum}</p>
	<button on:click={addNumber}>Add number</button>
</section>
