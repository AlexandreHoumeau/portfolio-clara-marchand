<script>
	import { fly } from 'svelte/transition';
	import Transition from '../components/Transition.svelte';
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

	const choosProject = (path) => {
		projectIsVisible = false;
		menuIsOpen = false;
		goto(path);
	};
</script>

<div
	in:fly={{ y: 200, duration: 300 }}
	out:fly|local={{ y: -200, duration: 300 }}
	class="bg-primary grid grid-cols-2"
>
	<div class="font-wg-bold flex items-center text-white text-7xl  w-full ">
		{#if projectIsVisible}
			<div class="space-y-24 w-full ">
				<a
					href="allianz"
					sveltekit:reload
					out:fly|local={{ x: -200, duration: 1000, delay: 300 }}
					in:fly={{ x: -400, duration: 1000 }}
					class="flex items-center justify-start gap-4"
				>
					<div class="h-1 w-4/12 bg-white" />
					<div class="">Allianz</div>
				</a>

				<div
					on:click={() => choosProject('wizzer-teacher')}
					in:fly={{ x: -400, duration: 1000, delay: 300 }}
					out:fly|local={{ x: -400, duration: 1000, delay: 300 }}
					class="flex items-center justify-start gap-4"
				>
					<div class="h-1 w-4/12 bg-white" />
					<div class="">Wizzer Teacher</div>
				</div>

				<div
					on:click={() => choosProject('split')}
					in:fly={{ x: -400, duration: 1000, delay: 600 }}
					out:fly|local={{ x: -400, duration: 1000, delay: 600 }}
					class="flex items-center justify-start gap-4"
				>
					<div class="h-1 w-4/12 bg-white" />
					<div class="">Split</div>
				</div>
			</div>
		{/if}
	</div>

	<div class="font-wg-bold flex items-center text-white text-8xl h-[100vh] w-full ">
		<div class="space-y-24 w-full ">
			{#if !projectIsVisible}
				<a
					href="/"
					sveltekit:reload
					out:fly|local={{ x: 400, duration: 1000 }}
					in:fly={{ x: 400, duration: 1000 }}
					class="flex items-center justify-end gap-10"
				>
					<div>Home</div>
					<div class="h-1 w-5/12 bg-white" />
				</a>
			{/if}
			<div
				on:click={toggleProjects}
				out:fly|local={{ x: 400, duration: 1000 }}
				in:fly={{ x: 400, duration: 1000 }}
				class="flex items-center justify-end gap-10"
			>
				<div class="{projectIsVisible && 'text-5xl'} transition-all duration-1000">Projets</div>
				<div
					class="h-1 transition-all duration-1000 {projectIsVisible ? 'w-2/12' : 'w-5/12'} bg-white"
				/>
			</div>
			{#if !projectIsVisible}
				<a
					href="/about"
					sveltekit:reload
					out:fly|local={{ x: 400, duration: 1000 }}
					in:fly={{ x: 400, duration: 1000 }}
					class="flex items-center justify-end gap-10"
				>
					<div class="{projectIsVisible && 'text-5xl'} transition-all duration-1000">À propos</div>
					<div class="h-1 w-5/12 bg-white" />
				</a>
			{/if}
		</div>
	</div>
</div>
