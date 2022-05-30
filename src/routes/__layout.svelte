<!-- __layout.svelte -->
<script context="module">
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import '../app.css';
	import Transition from '../components/Transition.svelte';
	export const load = async ({ url }) => ({
		props: {
			key: url
		}
	});
</script>

<script>
	export let key;
	let menuIsOpen = false;
	let projectIsVisible = false;

	const toggleMenu = () => {
		menuIsOpen = !menuIsOpen;
	};

	const toggleProjects = () => {
		projectIsVisible = !projectIsVisible;
	};

	const choosProject = () => {
		projectIsVisible = false;
		menuIsOpen = false;
	};

	onMount(() => {
		AOS.init();
	});
</script>

<nav class="fixed font-pp-bold cursor-pointer text-3xl top-10 z-50 right-20">
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
					<a
						on:click={choosProject}
						href="/allianz"
						sveltekit:reload
						class="flex cursor-pointer items-center justify-start gap-4"
					>
						<div class="h-1 w-4/12 bg-white" />
						<div class="">Allianz</div>
					</a>

					<a
						on:click={choosProject}
						href="/wizzer-teacher"
						sveltekit:reload
						in:fly={{ x: -400, duration: 1000, delay: 300 }}
						class="flex cursor-pointer items-center justify-start gap-4"
					>
						<div class="h-1 w-4/12 bg-white" />
						<div class="">Wizzer Teacher</div>
					</a>

					<a
						on:click={choosProject}
						href="/split"
						sveltekit:reload
						in:fly={{ x: -400, duration: 1000, delay: 600 }}
						class="flex cursor-pointer items-center justify-start gap-4"
					>
						<div class="h-1 w-4/12 bg-white" />
						<div class="">Split</div>
					</a>
				</div>
			{/if}
		</div>

		<div class={`font-wg-bold flex items-center text-white text-4xl lg:text-8xl h-[100vh] w-full`}>
			<div class="space-y-24 w-full ">
				{#if !projectIsVisible}
					<a
						on:click={choosProject}
						href="/"
						out:fly|local={{ x: 400, duration: 1000 }}
						in:fly={{ x: 400, duration: 1000 }}
						class="flex cursor-pointer items-center justify-end gap-10"
					>
						<div>Home</div>
						<div class="h-1 w-5/12 bg-white" />
					</a>
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
					<a
						href="/about"
						sveltekit:reload
						on:click={choosProject}
						out:fly|local={{ x: 400, duration: 1000 }}
						in:fly={{ x: 400, duration: 1000 }}
						class="flex cursor-pointer items-center justify-end gap-10"
					>
						<div class="{projectIsVisible && 'text-5xl'} transition-all duration-1000">
							À propos
						</div>
						<div class="h-1 w-5/12 bg-white" />
					</a>
				{/if}
			</div>
		</div>
	</div>
{:else}
	<Transition>
		<slot />
	</Transition>
{/if}
