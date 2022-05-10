<script>
	import { fly } from 'svelte/transition';
	import Projects from '../components/carousel.svelte';
	import Blob from '../components/blob.svelte';
	import { onMount } from 'svelte';

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
<svelte:head>
  <title>Clara Marchand</title>
</svelte:head>

<div class="w-screen h-screen">
	<div class="flex justify-center items-center h-full">
		<div bind:this={loader} id="loader" class="w-0 h-px flex justify-center items-center">
			{#if isVisible}
				<div
					in:fly={{ y: -1000, duration: 3000 }}
					id="title"
					class="absolute lg:text-9xl text-6xl text-center name"
				>
					Clara Marchand<br />
					<div class="lg:text-5xl text-3xl sub">UX DESIGNER</div>
				</div>
				<Blob />
			{/if}
		</div>
	</div>
</div>

<Projects />

<style>
	.name {
		color: #6e44ff;
		font-family: 'Nightydemo';
	}
	.sub {
		font-family: 'Wagon-bold';
	}
	#loader {
		background-color: #6e44ff;
		transition: width 1s, height 1s, transform 2s;
	}

	circle {
		fill: #fff;
	}
</style>
