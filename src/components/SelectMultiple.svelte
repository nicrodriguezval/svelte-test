<script lang="ts">
	let scoops = 1;
	let flavours: string[] = [];

	const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
</script>

<section>
	<h3>SelectMultiple component</h3>

	<h4>Size</h4>
	{#each [1, 2, 3] as size}
		<label>
			<input type="radio" value={size} bind:group={scoops} />
			{size}
			{size === 1 ? 'scoop' : 'scoops'}
		</label>
	{/each}
	{#if scoops > 0}
		<p>You chose {scoops} {scoops === 1 ? 'scoop' : 'scoops'}</p>
	{:else}
		<p>Choose a size</p>
	{/if}

	<h4>Flavours</h4>
	<select multiple bind:value={flavours}>
		{#each ['cookies & cream', 'mint choc chip', 'raspberry ripple'] as flavour}
			<option>{flavour}</option>
		{/each}
	</select>
	{#if flavours.length > 0}
		<p>You chose {formatter.format(flavours)}</p>
	{:else}
		<p>Choose some flavours</p>
	{/if}

	<br>

	{#if flavours.length}
		<strong>
			{#if flavours.length <= scoops}
				<p>You ordered {scoops} {scoops === 1 ? 'scoop' : 'scoops'} of {formatter.format(flavours)}</p>
			{:else}	
				<p>Can't order more flavours than scoops</p>
			{/if}
		</strong>
	{/if}
</section>
