<script>
	import AOS from 'aos';

	import { onMount, onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';

	const banner = '/mockups/AZ_contenu.png';
	let visible = true;

	onMount(() => {
		AOS.refreshHard();
		setTimeout(() => {
			visible = false;
		}, 300);
	});

	onDestroy(() => {
		visible = true;
	});
</script>

<div class="overflow-hidden ">
	<div class="bg-secondary lg:relative lg:h-[493px] justify-center items-center w-full">
		<h1
			class="text-primary font-nighty absolute lg:top-10 left-2 lg:left-10 text-3xl lg:text-6xl"
			data-aos="fade-up"
			data-aos-duration="1000"
		>
			Allianz France
		</h1>
		<div
			data-aos="fade-up"
			data-aos-delay="300"
			data-aos-duration="2000"
			class="flex justify-center"
		>
			<img src={banner} class="lg:absolute -top-10 w-full lg:w-[1529px]" alt="banner" />
		</div>
	</div>

	<div class="lg:mt-40 hidden lg:flex justify-center relative text-primary font-pp-regular">
		{#if visible}
			<div
				transition:fly={{ x: 2000, duration: 5000, opacity: 1 }}
				class="bg-white slidein z-10 w-full -top-0 h-5 absolute"
			/>
		{:else}
			<div class="flex absolute bottom-4 justify-around w-3/4">
				<div in:fly={{ x: -200, delay: 500, duration: 1000 }} class="">
					UX/UI sur l'Espace client
				</div>
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
					<div
						in:fly={{ x: -200, delay: 600, duration: 1000 }}
						class="absolute top-4 w-40 -left-14"
					>
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
			data-aos-delay="2600"
			class="bg-secondary text-primary p-10 rounded-3xl lg:mb-0 mb-10"
		>
			<div class="font-wg-bold text-[40px]">Contexte</div>
			<div class="font-pp-regular text-[16px]">
				Dans le cadre de la refonte de l’Espace client Allianz France, j’ai eu l’occasion de
				travailler au sein de l’équipe projet (PO, UX designers, développeurs) <br /><br /> J’ai
				intégré l’équipe en septembre 2019 pour une mise en production de l’Espace client en
				septembre 2021. Durant ces deux années, j’ai travaillé “en co création” avec les PO et UX
				designers. <br /><br />Ma mission principale fut de réaliser les maquettes de l’Espace
				client, les faire tester lors de tests utilisateurs dédiés, et réitéré suite aux synthèses
				de tests.
			</div>
		</div>
		<div
			data-aos="fade-left"
			data-aos-delay="2600"
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
</div>
