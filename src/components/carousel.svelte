<script>
	import Icon from '../utils/Icon.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';

	const projects = [
		{
			id: 0,
			src: '/mockups/AZ_HP.png',
			title: 'Espace client Allianz France',
			href: 'allianz'
		},
		{
			id: 1,
			src: '/mockups/WT_HP.png',
			title: 'Wizzerd Teacher',
			href: 'wizzer-teacher'
		},
		{
			id: 2,
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

<div class="xl:grid lg:mt-20 lg:h-[100vh] xl:mt-0 grid-cols-5 lg:px-24 lg:pt-24">
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
<div class="flex justify-center space-x-4 my-10">
	{#each projects as project}
		<div
			on:click="{() => index = project.id}"
			class="{index === project.id
				? 'bg-primary'
				: 'bg-primary_light'} cursor-pointer transition-all duration-300 rounded-full w-3 h-3"
		/>
	{/each}
</div>

<style>
	#allianz {
		font-size: 77px;
	}
</style>
