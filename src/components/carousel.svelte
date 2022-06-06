<script>
	import Icon from '../utils/Icon.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';

	const projects = [
		{
			src: '/mockups/AZ_HP.png',
			title: 'Espace client Allianz France',
			href: 'allianz'
		},
		{
			src: '/mockups/WT_HP.png',
			title: 'Wizzerd Teacher',
			href: 'wizzer-teacher'
		},
		{
			src: '/mockups/SPLIT_HP.png',
			title: 'Split App',
			href: 'split'
		}
	];

	let index = 0;

	const chooseProject = async (path) => {
		await goto(path);
	};

	onMount(() => {
		// let deviceWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
		setInterval(() => {
			if (index === 2) {
				index = 0;
			} else {
				index++;
			}
		}, 4000);
	});
</script>

<div class="xl:grid lg:mt-20 lg:h-[100vh] xl:mt-0 grid-cols-5 lg:p-24">
	<div
		class="bg-secondary h-[40vh] lg:h-full xl:col-span-3 col-span-5 flex justify-center items-center lg:rounded-3xl relative"
	>
		{#each [projects[index]] as project (index)}
			<div
				transition:fly={{ x: -200 }}
				on:click={() => chooseProject(project.href)}
				class="absolute cursor-pointer left-4 lg:left-3/4 z-50 w-2/3 top-4 lg:top-20 text-primary text-4xl xl:text-[77px] font-wg-bold leading-tight"
			>
				<div>
					{project.title}
					<!-- <div class="xl:relative hidden">
						<Icon class="absolute" width="30px" height="30px" name="arrow-right" />
					</div> -->
				</div>
			</div>
			<img
				transition:fly={{ x: -200 }}
				on:click={() => chooseProject(project.href)}
				src={project.src}
				alt="allianz"
				class="absolute cursor-pointer"
			/>
		{/each}
	</div>
</div>

<style>
	#allianz {
		font-size: 77px;
	}
</style>
