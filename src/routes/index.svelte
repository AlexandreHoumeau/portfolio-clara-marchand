<script>
	import { fly } from 'svelte/transition';
	import Projects from '../components/carousel.svelte';
	import Blob from '../components/blob.svelte';
	import { onMount } from 'svelte';

	let loader;
	let isVisible = false;
	let bgVisible = false;
	onMount(async () => {
		console.log(
			'%c Made with',
			'font-weight: bold; font-size: 30px;color: blue; text-shadow: 3px 3px 3px rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)'
		);
		console.log(
			'%c Svelte',
			'font-weight: bold; font-size: 30px;color: red; text-shadow: 3px 3px 3px rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)'
		);
		console.log(
			'%c by Alexandre Houmeau',
			'font-weight: bold; font-size: 30px;color: purple; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)'
		);
		console.log('%c https://alexandre-houmeau.com/', 'font-weight: bold; font-size: 24px');

		setTimeout(() => {
			loader.style.width = '100%';
			setTimeout(() => {
				loader.style.height = '100%';
				setTimeout(() => {
					isVisible = true;
					setTimeout(() => {
						bgVisible = true;
					}, 2000);
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
					class="absolute transition-all duration-1000 {bgVisible &&
						'bg-white'} rounded-full p-4 lg:text-[200px] text-4xl text-center name"
				>
					<div>Clara</div>
					<div class="lg:my-20 my-0">Marchand</div>
					<div class="lg:text-[80px] text-3xl sub">UX DESIGNER</div>
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
