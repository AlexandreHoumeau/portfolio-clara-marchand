<script>
	import Icon from '../utils/Icon.svelte';
	import { onMount } from 'svelte';

	import { fly } from 'svelte/transition';
	const src0 = '/mockups/AZ_HP.png';
	const src1 = '/mockups/WT_HP.png';
	const src2 = '/mockups/SPLIT_HP.png';
	let index = 0;
	let isMobile
	onMount(() => {
		let deviceWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
		isMobile = deviceWidth <= 767;
		setInterval(() => {
			if (index === 2) {
				index = 0;
			} else {
				index++;
			}
		}, 5000);
	});
</script>

<div class="xl:grid mt-20 xl:mt-0 grid-cols-5 lg:p-24 h-[100vh]">
	<div
		class="bg-secondary xl:col-span-3 col-span-5 flex justify-center items-center rounded-3xl relative"
	>
		{#if index === 0}
			<img
				out:fly|local={{ x: -200, duration: 1000 }}
				in:fly|local={{ x: 200, duration: 1000, delay: 1000 }}
				src={src0}
				alt="allianz"
				class="sm:w-[900px] xl:absolute"
			/>
		{/if}
		{#if index === 1}
			<img
				out:fly|local={{ x: -200, duration: 1000 }}
				in:fly={{ x: 200, duration: 1000, delay: 1000 }}
				src={src1}
				alt="wizzer-teacher"
				class="w-[900px] xl:absolute"
			/>
		{/if}
		{#if index === 2}
			<img
				out:fly|local={{ x: -200, duration: 1000 }}
				in:fly={{ x: 200, duration: 1000, delay: 1000 }}
				src={src2}
				alt="split"
				class="w-[900px] xl:absolute"
			/>
		{/if}
	</div>
	<div class="xl:relative m-10 xl:m-0 xl:col-span-2">
		{#if index === 0}
			<a
				href="allianz"
				sveltekit:reload
				out:fly|local={{ x: -200, duration: 1000, delay: 300 }}
				in:fly={{ x: 200, duration: 1000, delay: 1300 }}
				class="text-primary text-4xl xl:text-[77px] font-wg-bold leading-tight xl:absolute -left-44 top-10"
			>
				Espace client <br /> Allianz France
				<div class="flex items-center justify-end">
					<Icon name="arrow-right" />
					<div class="sm:text-xl text-lg font-pp-regular text-right">Découvrir</div>
				</div>
			</a>
		{/if}

		{#if index === 1}
			<a
				sveltekit:reload
				href="wizzer-teacher"
				out:fly|local={{ x: -200, duration: 1000, delay: 300 }}
				in:fly={{ x: 200, duration: 1000, delay: 1300 }}
				class="text-primary text-4xl xl:text-[77px] font-wg-bold leading-tight xl:absolute -left-44 top-10"
			>
				Wizzer<br />Teacher
				<div class="flex items-center justify-end">
					<Icon name="arrow-right" />
					<div class="sm:text-xl text-lg font-pp-regular text-right">Découvrir</div>
				</div>
			</a>
		{/if}

		{#if index === 2}
		<a
		sveltekit:reload
		href="split"				out:fly|local={{ x: -200, duration: 1000, delay: 300 }}
				in:fly={{ x: 200, duration: 1000, delay: 1300 }}
				class="text-primary text-4xl xl:text-[77px] font-wg-bold leading-tight xl:absolute -left-44 top-10"
			>
				Split
				<div class="flex items-center justify-end">
					<Icon name="arrow-right" />
					<div class="sm:text-xl text-lg font-pp-regular text-right">Découvrir</div>
				</div>
			</a>
		{/if}
	</div>
</div>

<style>
	#allianz {
		font-size: 77px;
	}
</style>
