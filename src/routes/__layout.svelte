<!-- __layout.svelte -->
<script context="module">
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import '../app.css';
	import Transition from '../components/Transition.svelte';
	export const load = async ({ url }) => ({
		props: {
			key: url
		}
	});
</script>

<script>
	import { goto } from '$app/navigation';

	export let key;
	let menuIsOpen = false;
	let projectIsVisible = false;

	const toggleMenu = () => {
		menuIsOpen = !menuIsOpen;
	};

	const toggleProjects = () => {
		projectIsVisible = !projectIsVisible;
	};

	const choosProject = async (path) => {
		await goto(path);
		projectIsVisible = false;
		menuIsOpen = false;
	};

	onMount(() => {
		AOS.init();
	});
</script>

<nav class="fixed font-pp-bold cursor-pointer lg:text-xl top-10 z-50 right-10 lg:right-20">
	<div class={`${menuIsOpen ? 'text-white' : 'text-primary'}`} on:click={toggleMenu}>
		{menuIsOpen ? 'Fermer' : ' Menu'}
	</div>
	<!-- <a href="/menu">{menuIsOpen ? 'Fermer' : ' Menu'}</a> -->
</nav>

{#if menuIsOpen}
	<div in:fly={{ y: 200, duration: 300 }} class="bg-primary grid grid-cols-2">
		<div class="font-wg-bold flex items-center text-white text-lg lg:text-7xl  w-full ">
			{#if projectIsVisible}
				<div class="space-y-24 w-full ">
					<div
						on:click={() => choosProject('/allianz')}
						class="flex cursor-pointer items-center justify-start gap-4"
					>
						<div class="h-1 w-4/12 bg-white" />
						<div class="">Allianz</div>
					</div>

					<div
						on:click={() => choosProject('/wizzer-teacher')}
						in:fly={{ x: -400, duration: 1000, delay: 300 }}
						class="flex cursor-pointer items-center justify-start gap-4"
					>
						<div class="h-1 w-1/12 bg-white" />
						<div>Wizzer Teacher</div>
					</div>

					<div
						on:click={() => choosProject('/split')}
						in:fly={{ x: -400, duration: 1000, delay: 600 }}
						class="flex cursor-pointer items-center justify-start gap-4"
					>
						<div class="h-1 w-4/12 bg-white" />
						<div class="">Split</div>
					</div>
				</div>
			{/if}
		</div>

		<div class={`font-wg-bold flex items-center text-white text-xl md:text-4xl lg:text-7xl h-[100vh] w-full`}>
			<div class="space-y-24 w-full ">
				{#if !projectIsVisible}
					<div
						on:click={() => choosProject('/')}
						transition:fade|local
						class="flex cursor-pointer items-center justify-end gap-10"
					>
						<div>Home</div>
						<div class="h-1 lg:w-5/12 w-3/4 bg-white" />
			</div>
				{/if}
				<div on:click={toggleProjects} class="flex  items-center justify-end gap-10">
					<div
						class="{projectIsVisible &&
							'text-xl lg:text-5xl'} cursor-pointer transition-all duration-1000"
					>
						{projectIsVisible ? 'Fermer' : 'Projets'}
					</div>
					<div
						class="h-1 transition-all duration-1000 {projectIsVisible
							? 'w-2/12'
							: 'w-5/12'} bg-white"
					/>
				</div>
				{#if !projectIsVisible}
					<div
						on:click={() => choosProject('/about')}
						transition:fade|local
						class="flex cursor-pointer items-center justify-end gap-10"
					>
						<div class="transition-all duration-1000">
							À propos
						</div>
						<div class="h-1 w-2/12 bg-white" />
					</div>
				{/if}
			</div>
		</div>
	</div>
{:else}
	<Transition>
		<slot />
	</Transition>
{/if}
