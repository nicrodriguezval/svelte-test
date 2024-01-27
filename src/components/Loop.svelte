<script lang="ts">
	const colors = ['red', 'green', 'blue'];
	let selected = colors[0];
</script>

<section>
	<h3>Loop component</h3>

	<h4 style="color: {selected}">Pick a color</h4>

	<div class="color-btns">
		{#each colors as color, i}
			<button
				aria-current={selected === color}
				aria-label="Select {color}"
				style="background-color: {color}"
				on:click={() => (selected = color)}
			>
				{i + 1}
			</button>
		{/each}
	</div>
</section>

<style>
	.color-btns {
		display: flex;
		justify-content: center;
		gap: 5px;
	}

	button {
		border: none;
		border-radius: 50%;
		width: 50px;
		aspect-ratio: 1;
		cursor: pointer;
		transition: opacity 0.2s ease-in-out;
	}

	button:hover {
		opacity: 0.8;
	}
</style>
