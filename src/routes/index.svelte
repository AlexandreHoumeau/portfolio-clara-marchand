<script>
	import { onMount } from 'svelte';
	import Home from './home.svelte';

	import { spring } from 'svelte/motion';

	let coords = spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.1,
			damping: 0.25
		}
	);
	let size = spring(10);
	let loader;
	let isVisible = false;

	onMount(async () => {
		setTimeout(() => {
			loader.style.width = '100%';
			setTimeout(() => {
				loader.style.height = '100%';
				setTimeout(() => {
					isVisible = true;
				}, 1200);
			}, 1200);
		}, 1000);
	});
</script>

<div class="w-screen h-screen">

	<div class="flex justify-center items-center h-full">
		<div bind:this={loader} id="loader" class="w-0 h-px flex justify-center items-center">
			{#if isVisible}
				<Home />
			{/if}
		</div>
	</div>
</div>

<style>
	#loader {
		background-color: #6e44ff;
		transition: width 1s, height 1s, transform 2s;
	}

	circle {
		fill: #fff;
	}
</style>
