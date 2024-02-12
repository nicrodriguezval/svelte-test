<script lang="ts">
	type Question = {
		id: number;
		text: string;
		answer: string;
	};

	let questions: Question[] = [
		{
			id: 0,
			text: 'What is your name?',
			answer: 'Svelte'
		},
		{
			id: 1,
			text: 'What is your quest?',
			answer: 'World Domination'
		},
		{
			id: 2,
			text: 'What is your favorite color?',
			answer: 'rgb(0, 255, 0)'
		}
	];

	let selected: Question;
	let answer = '';

	function handleSubmit() {
		alert(`You answered question ${selected.id} (${selected.text}) with "${answer}"`);
	}
</script>

<section>
	<h3>Select component</h3>

	<form on:submit|preventDefault={handleSubmit}>
		<select bind:value={selected}>
			{#each questions as question}
				<option value={question}>{question.text}</option>
			{/each}
		</select>

		<input type="text" bind:value={answer} />

		<button type="submit" disabled={!answer}>Submit</button>
	</form>

	<p>Selected question No. {selected ? (selected.id + 1) : '[waiting...]'}</p>
</section>
