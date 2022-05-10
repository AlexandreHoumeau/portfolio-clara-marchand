<script>
	import Icon from '../utils/Icon.svelte';
	import { onMount } from 'svelte';

	import { fly } from 'svelte/transition';
	const src0 = 'static/mockups/AZ_HP.png';
	const src1 = 'static/mockups/WT_HP.png';
	const src2 = 'static/mockups/SPLIT_HP.png';
	let index = 0;

	onMount(() => {
		setInterval(() => {
			if (index === 2) {
				index = 0;
			} else {
				index++;
			}
		}, 5000);
	});
</script>

<div class="grid grid-cols-5 lg:p-24 h-[100vh]">
	<div
		class="bg-secondary xl:col-span-3 col-span-5 flex justify-center items-center rounded-3xl relative"
	>
		{#if index === 0}
			<img
				out:fly|local={{ x: -200, duration: 1000 }}
				in:fly|local={{ x: 200, duration: 1000, delay: 1000 }}
				src={src0}
				alt="allianz"
				class="w-[900px] absolute"
			/>
		{/if}
		{#if index === 1}
			<img
				out:fly|local={{ x: -200, duration: 1000 }}
				in:fly={{ x: 200, duration: 1000, delay: 1000 }}
				src={src1}
				alt="allianz"
				class="w-[900px] absolute"
			/>
		{/if}
		{#if index === 2}
			<img
				out:fly|local={{ x: -200, duration: 1000 }}
				in:fly={{ x: 200, duration: 1000, delay: 1000 }}
				src={src2}
				alt="allianz"
				class="w-[900px] absolute"
			/>
		{/if}
	</div>
	<div class="relative col-span-2">
		{#if index === 0}
			<div
				out:fly|local={{ x: -200, duration: 1000, delay: 300 }}
				in:fly={{ x: 200, duration: 1000, delay: 1300 }}
				id="allianz"
				class="text-primary font-wg-bold leading-tight absolute -left-44 top-10"
			>
				Espace client <br /> Allianz France
				<a href="allianz" sveltekit:prefetch class="flex items-center justify-end">
					<Icon name="arrow-right" />
					<div class="text-xl font-pp-regular text-right">Découvrir</div>
				</a>
			</div>
		{/if}

		{#if index === 1}
			<a
				href="wizzer-teacher"
				out:fly|local={{ x: -200, duration: 1000, delay: 300 }}
				in:fly={{ x: 200, duration: 1000, delay: 1300 }}
				id="allianz"
				class="text-primary font-wg-bold leading-tight absolute -left-44 top-10"
			>
				Wizzer<br />Teacher
				<div class="flex items-center justify-end">
					<Icon name="arrow-right" />
					<div class="text-xl font-pp-regular text-right">Découvrir</div>
				</div>
			</a>
		{/if}

		{#if index === 2}
			<div
				out:fly|local={{ x: -200, duration: 1000, delay: 300 }}
				in:fly={{ x: 200, duration: 1000, delay: 1300 }}
				id="allianz"
				class="text-primary font-wg-bold leading-tight absolute -left-20 top-32"
			>
				Split
				<div class="flex items-center justify-end">
					<Icon name="arrow-right" />
					<div class="text-xl font-pp-regular text-right">Découvrir</div>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	#allianz {
		font-size: 77px;
	}
</style>
