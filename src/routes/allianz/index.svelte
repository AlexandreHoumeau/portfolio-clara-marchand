<script>
	
	import { onMount, onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';
	import Header from '../../templates/shared/header.svelte';
	import Button from '../../components/button.svelte';
	const banner = '/mockups/AZ_contenu.png';
	const banner2 = '/mockups/mockup_mobile_az.png';
	const banner3 = '/mockups/mockup_desktop_az.png';
	let visible = true;
	
	import AOS from 'aos';
	onMount(() => {
		setTimeout(() => {
			AOS.refresh();
		}, 1000);
		setTimeout(() => {
			visible = false;
		}, 300);
	});

	onDestroy(() => {
		visible = true;
	});
</script>

<Header {banner} title="Clara Marchand - Allianz" titleHeader="Allianz France" />

<div class="lg:mt-40 hidden lg:flex justify-center relative text-primary font-pp-regular">
	{#if visible}
		<div
			transition:fly={{ x: 2000, duration: 5000, opacity: 1 }}
			class="bg-white slidein z-10 w-full -top-0 h-5 absolute"
		/>
	{:else}
		<div class="flex absolute bottom-4 justify-around w-3/4">
			<div in:fly={{ x: -200, delay: 500, duration: 1000 }} class="">UX/UI sur l'Espace client</div>
			<div in:fly={{ x: -200, delay: 1400, duration: 1000 }}>travaux CX / UX</div>
		</div>
		<div class="w-3/4 h-px absolute bottom-2 border-dashed border-t  border-primary" />
		<div class="flex justify-between w-3/4">
			<div class=" relative">
				<div class="rounded-full bg-primary h-4 w-4" />
				<div in:fly={{ x: -200, delay: 0, duration: 1000 }} class="absolute top-4 w-40 -left-14">
					Septembre 2019
				</div>
			</div>
			<div class="relative">
				<div class="rounded-full bg-primary h-4 w-4" />
				<div in:fly={{ x: -200, delay: 600, duration: 1000 }} class="absolute top-4 w-40 -left-14">
					Septembre 2021
				</div>
			</div>
			<div class="justify-end relative flex flex-col">
				<div class="rounded-full text-right bg-primary h-4 w-4" />
				<div in:fly={{ x: -200, delay: 1600, duration: 1000 }} class="absolute top-4 -right-8">
					Aujourd'hui
				</div>
			</div>
		</div>
	{/if}
</div>

<div class=" my-10 lg:my-40 px-1 lg:px-16 justify-between lg:grid grid-cols-2 gap-16">
	<div
		data-aos="fade-right"
		data-aos-duration="1000"
		class="bg-secondary text-primary p-10 rounded-3xl lg:mb-0 mb-10"
	>
		<div class="font-wg-bold text-[40px]">Contexte</div>
		<div class="font-pp-regular text-[16px]">
			Dans le cadre de la refonte de l’Espace client Allianz France, j’ai eu l’occasion de
			travailler au sein de l’équipe projet (PO, UX designers, développeurs) <br /><br /> J’ai
			intégré l’équipe en septembre 2019 pour une mise en production de l’Espace client en septembre
			2021. Durant ces deux années, j’ai travaillé “en co création” avec les PO et UX designers.
			<br /><br />Ma mission principale fut de réaliser les maquettes de l’Espace client, les faire
			tester lors de tests utilisateurs dédiés, et réitéré suite aux synthèses de tests.
		</div>
	</div>
	<div
		data-aos="fade-left"
		data-aos-duration="1000"
		class="bg-primary  text-secondary p-10 rounded-3xl"
	>
		<div class="font-wg-bold text-[40px]">Missions UX/CX/UI</div>
		<div class="text-[16px]">
			<div class="font-pp-bold ">UX :</div>
			<ul class="font-pp-regular">
				<li>Réflexion UX sur les parcours</li>
				<li>Réalisation de tests utilisateurs</li>
				<li>Recettage</li>
			</ul>

			<div class="font-pp-bold mt-4">CX :</div>
			<ul class="font-pp-regular">
				<li>Entretiens utilisateurs</li>
				<li>Benchmark sur les acteurs concurrents</li>
				<li>Réflexion sur les parcours dans une optique d’amélioration continue</li>
			</ul>

			<div class="font-pp-bold mt-4">UI :</div>
			<ul class="font-pp-regular">
				<li>Création d’un design system regroupant tous les composants de l’Espace client</li>
				<li>Création de maquettes</li>
				<li>Harmonisation de l’UI sur tous les parcours</li>
			</ul>
		</div>
	</div>
</div>

<div class="my-20">
	<div class="flex items-top gap-4">
		<div data-aos="fade-right" data-aos-duration="600" class="h-px w-1/6 bg-primary mt-4" />
		<div data-aos="fade-right" data-aos-duration="600" class="text-primary text-xl lg:text-5xl">
			<div class="font-wg-bold">L’espace client Allianz</div>
			<div class="font-wg-light text-right">en version mobile</div>
		</div>
	</div>
</div>

<div class="bg-secondary lg:relative h-full justify-center items-center w-full">
	<div class="flex justify-center">
		<img src={banner2} class="w-full lg:w-[952px]" alt="banner" />
	</div>
</div>

<div class="my-40">
	<div class="flex justify-end items-top gap-4">
		<div data-aos="fade-left" data-aos-duration="600" class="text-primary text-xl lg:text-5xl">
			<div class="font-wg-bold">L’espace client Allianz</div>
			<div class="font-wg-light text-left">en version desktop</div>
		</div>
		<div data-aos="fade-left" data-aos-duration="600" class="h-px w-1/6 bg-primary mt-4" />
	</div>
</div>

<div class="bg-secondary lg:relative h-full justify-center items-center w-full">
	<div class="flex justify-center">
		<img src={banner3} class="w-full lg:w-[1612px]" alt="banner" />
	</div>
</div>

<div class="flex justify-center mt-10 mb-20">
	<Button url="wizzer-teacher" />
</div>
