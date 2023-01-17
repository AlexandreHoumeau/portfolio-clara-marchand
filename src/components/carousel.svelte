<script>
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';
	import AOS from 'aos';
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
			title: 'Wizzer Teacher',
			href: 'wizzer-teacher'
		},
		{
			id: 2,
			src: '/mockups/SPLIT_HP.png',
			title: 'Split App',
			href: 'split'
		},
		{
			id: 3,
			src: '/mockups/logos.png',
			title: 'Identités visuelles',
			href: 'identites-visuelles'
		}
	];

	let index = 0;
	let timer;
	const chooseProject = (path) => {
		goto(path);
	};

	const goBack = () => {
		if (index === 0) {
			index = 3;
		} else {
			index -= 1;
		}
	};

	const goNext = () => {
		if (index === 3) {
			index = 0;
		} else {
			index += 1;
		}
	};
</script>

<div class="xl:grid lg:mt-20 lg:h-[100vh] xl:mt-0 grid-cols-5 lg:px-24 relative lg:pt-24">
	<div on:click={goBack} class="absolute lg:flex hidden cursor-pointer z-10 bottom-0 top-0  items-center">
		<svg
			width="106"
			height="106"
			viewBox="0 0 106 106"
			fill="none"
			class=" fill-primary"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M67.5745 29.5918C68.3842 30.4015 68.7891 31.4321 68.7891 32.6835C68.7891 33.9349 68.3842 34.9654 67.5745 35.7751L50.3495 53.0001L67.5745 70.2251C68.3842 71.0349 68.7891 72.0654 68.7891 73.3168C68.7891 74.5682 68.3842 75.5987 67.5745 76.4085C66.7648 77.2182 65.7342 77.623 64.4828 77.623C63.2314 77.623 62.2009 77.2182 61.3911 76.4085L41.0745 56.0918C40.6328 55.6501 40.3192 55.1717 40.1337 54.6564C39.9512 54.1411 39.8599 53.589 39.8599 53.0001C39.8599 52.4112 39.9512 51.8592 40.1337 51.3439C40.3192 50.8286 40.6328 50.3501 41.0745 49.9085L61.3911 29.5918C62.2009 28.7821 63.2314 28.3772 64.4828 28.3772C65.7342 28.3772 66.7648 28.7821 67.5745 29.5918Z"
			/>
		</svg>
	</div>
	<div
		on:click={goNext}
		class="absolute cursor-pointer z-10 bottom-0 top-0 right-0 lg:flex hidden items-center"
	>
		<svg
			width="106"
			height="106"
			viewBox="0 0 106 106"
			fill="none"
			class=" fill-primary"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M38.4255 76.4082C37.6158 75.5985 37.2109 74.5679 37.2109 73.3165C37.2109 72.0651 37.6158 71.0346 38.4255 70.2249L55.6505 52.9999L38.4255 35.7749C37.6158 34.9651 37.2109 33.9346 37.2109 32.6832C37.2109 31.4318 37.6158 30.4013 38.4255 29.5915C39.2352 28.7818 40.2658 28.377 41.5172 28.377C42.7686 28.377 43.7991 28.7818 44.6089 29.5915L64.9255 49.9082C65.3672 50.3499 65.6808 50.8283 65.8663 51.3436C66.0488 51.8589 66.1401 52.411 66.1401 52.9999C66.1401 53.5888 66.0488 54.1408 65.8663 54.6561C65.6808 55.1714 65.3672 55.6499 64.9255 56.0915L44.6089 76.4082C43.7991 77.2179 42.7686 77.6228 41.5172 77.6228C40.2658 77.6228 39.2352 77.2179 38.4255 76.4082Z"
			/>
		</svg>
	</div>
	<div
		class="bg-secondary h-[40vh] lg:h-full xl:col-span-3 col-span-5 flex justify-center items-center lg:rounded-3xl relative"
	>
		{#each [projects[index]] as project (index)}
			<div
				transition:fly|local={{ x: -200, duration: 1000 }}
				on:click={() => chooseProject(project.href)}
				class="absolute cursor-pointer left-4 lg:left-3/4 lg:ml-20 z-50 w-2/3 top-4 lg:top-20 text-primary text-4xl xl:text-[77px] font-wg-bold leading-tight"
			>
				<div>
					{project.title}
				</div>
			</div>
			<img
				transition:fly|local={{ x: -200 }}
				on:click={() => chooseProject(project.href)}
				on:load={() => AOS.refresh()}
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
			on:click={() => (index = project.id)}
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
