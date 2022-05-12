<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import SchemaStudent from './schemaStudent.svelte';
	import SchemaTeacher from './schemaTeacher.svelte';
	import SchemaMobile from './schemaMobile.svelte';

	const banner = 'static/mockups/SPLIT_contenu.png';
	const banner2 = 'static/mockups/SPLIT_contenu1.png';
	const banner3 = 'static/mockups/SPLIT_contenu2.png';
	const banner4 = 'static/mockups/SPLIT_mobile1.png';
	const banner5 = 'static/mockups/SPLIT_mobile.png';

	let visible = true;

	onMount(() => {
		AOS.init();

		setTimeout(() => {
			visible = false;
		}, 300);
	});
</script>

<svelte:head>
	<title>Split</title>
</svelte:head>

<div class="overflow-hidden">
	<div class="bg-secondary lg:relative lg:h-[493px] justify-center items-center w-full">
		<h1 class="text-primary font-nighty absolute lg:top-10 left-2 lg:left-10 text-3xl lg:text-6xl">
			Split
		</h1>
		<div class="flex justify-center">
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
			<div class="flex absolute bottom-5 justify-around w-4/5">
				<div in:fly={{ x: -200, duration: 1000 }} class="text-center w-full">
					parcours utilisateurs<br /> wireframes desktop
				</div>
				<div in:fly={{ x: -200, delay: 300, duration: 1000 }} class="text-center w-full">
					création de la <br /> charte graphique
				</div>
				<div in:fly={{ x: -200, delay: 600, duration: 1000 }} class="text-center w-full">
					définition de l'UI <br />prototypes desktop
				</div>
				<div in:fly={{ x: -200, delay: 900, duration: 1000 }} class="text-center w-full">
					tests utilisateurs <br />desktop
				</div>
				<div in:fly={{ x: -200, delay: 1200, duration: 1000 }} class="text-center w-full">
					wireframes <br />mobile
				</div>
				<div in:fly={{ x: -200, delay: 1500, duration: 1000 }} class="text-center w-full">
					UI et tests <br />mobile
				</div>
			</div>
			<div class="w-4/5 h-px absolute bottom-2 border-dashed border-t  border-primary" />
			<div class="flex justify-between w-4/5">
				<div class=" relative">
					<div class="rounded-full bg-primary h-4 w-4" />
					<div in:fly={{ x: -200, delay: 0, duration: 1000 }} class="absolute top-4 w-40 -left-14">
						Janvier 2021
					</div>
				</div>
				<div class="relative">
					<div class="rounded-full bg-primary h-4 w-4" />
					<div
						in:fly={{ x: -200, delay: 600, duration: 1000 }}
						class="absolute top-4 w-28 -left-10"
					>
						avril 2021
					</div>
				</div>
				<div class="justify-end relative flex flex-col">
					<div class="rounded-full text-right bg-primary h-4 w-4" />
					<div in:fly={{ x: -200, delay: 900, duration: 1000 }} class="absolute top-4 w-40 -left-8">
						mai 2021
					</div>
				</div>
				<div class="justify-end relative flex flex-col">
					<div class="rounded-full text-right bg-primary h-4 w-4" />
					<div
						in:fly={{ x: -200, delay: 1200, duration: 1000 }}
						class="absolute top-4 w-40 -left-8"
					>
						août 2021
					</div>
				</div>
				<div class="justify-end relative flex flex-col">
					<div class="rounded-full text-right bg-primary h-4 w-4" />
					<div
						in:fly={{ x: -200, delay: 1500, duration: 1000 }}
						class="absolute top-4 w-40 -left-8"
					>
						septembre 2021
					</div>
				</div>
				<div class="justify-end relative flex flex-col">
					<div class="rounded-full text-right bg-primary h-4 w-4" />
					<div
						in:fly={{ x: -200, delay: 1800, duration: 1000 }}
						class="absolute top-4 w-40 -left-8"
					>
						décembre 2021
					</div>
				</div>

				<div class="justify-end relative flex flex-col">
					<div class="rounded-full text-right bg-primary h-4 w-4" />
					<div
						in:fly={{ x: -200, delay: 2100, duration: 1000 }}
						class="absolute top-4 w-40 -left-8"
					>
						mars 2022
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
				Split est une plateforme de partage de compétences et d'expériences digitales s’inspirant du
				fonctionnement reverse mentoring. Des jeunes qui viennent d’intégrer le monde professionnel
				vont former des personnes déjà.
			</div>
		</div>
		<div
			data-aos="fade-left"
			data-aos-delay="2600"
			data-aos-duration="1000"
			class="bg-primary  text-secondary p-10 rounded-3xl"
		>
			<div class="font-wg-bold text-[40px]">Missions UX/UI</div>
			<div class="text-[16px]">
				<div class="font-pp-bold ">UX :</div>
				<ul class="font-pp-regular">
					<li>Création des parcours de bout en bout</li>
					<li>Création des wireframes</li>
					<li>Définition des prototypes</li>
					<li>Tests utilisateurs</li>
				</ul>

				<div class="font-pp-bold mt-4">UI :</div>
				<ul class="font-pp-regular">
					<li>Définition de la charte graphique de la plateforme</li>
					<li>Créations des maquettes UI</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="my-20">
		<div class="flex items-top gap-4">
			<div data-aos="fade-right" data-aos-duration="600" class="h-px w-1/6 bg-primary mt-4" />
			<div data-aos="fade-right" data-aos-duration="600" class="text-primary text-xl lg:text-5xl">
				<div class="font-wg-bold">Utilisateurs élèves</div>
				<div class="font-wg-light text-right">dans les grandes lignes</div>
			</div>
		</div>

		<SchemaStudent />
	</div>

	<div class="bg-secondary lg:relative h-full justify-center items-center w-full">
		<div class="flex justify-center">
			<img src={banner2} class="w-full lg:w-[1500px]" alt="banner" />
		</div>
	</div>

	<div
		class="lg:grid grid-cols-2 gap-10 font-pp-regular items-center text-justify mx-4 my-20 lg:mx-20 text-primary"
	>
		<div data-aos="fade-right" data-aos-duration="300">
			Le bootcamper accède à différents modules dans lesquels se trouvent des cours et des exercices
			qu’il peut effectuer. Il participe également à des battles créées par l’admin et s’en suit un
			classement.
		</div>

		<div class="lg:mt-0 mt-10" data-aos="fade-left" data-aos-duration="300">
			Le bootcamper accède au classement de la battle à laquelle il a participé. <b />Il a également
			accès à une partie profil dans laquelle il peut personnaliser ses informations personnelles.
		</div>
	</div>

	<div class="my-40">
		<div class="flex justify-end items-top gap-4">
			<div data-aos="fade-left" data-aos-duration="600" class="text-primary text-xl lg:text-5xl">
				<div class="font-wg-bold">Utilisateurs admin</div>
				<div class="font-wg-light text-left">dans les grandes lignes</div>
			</div>
			<div data-aos="fade-left" data-aos-duration="600" class="h-px w-1/6 bg-primary mt-4" />
		</div>
		<SchemaTeacher />
	</div>

	<div class="bg-secondary lg:relative h-full justify-center items-center w-full">
		<div class="flex justify-center">
			<img src={banner3} class="w-full lg:w-[1500px]" alt="banner" />
		</div>
	</div>

	<div
		class="lg:grid grid-cols-2 gap-10 font-pp-regular items-center text-justify mx-4 my-20 lg:mx-20 text-primary"
	>
		<div data-aos="fade-right" data-aos-duration="300">
			Le bootcamper accède à différents modules dans lesquels se trouvent des cours et des exercices
			qu’il peut effectuer. Il participe également à des battles créées par l’admin et s’en suit un
			classement.
		</div>

		<div class="lg:mt-0 mt-10" data-aos="fade-left" data-aos-duration="300">
			Le bootcamper accède au classement de la battle à laquelle il a participé.<br />
			Il a également accès à une partie profil dans laquelle il peut personnaliser ses informations personnelles.
		</div>
	</div>

	<div class="my-20">
		<div class="flex items-top gap-4">
			<div data-aos="fade-right" data-aos-duration="600" class="h-px w-1/6 bg-primary mt-4" />
			<div data-aos="fade-right" data-aos-duration="600" class="text-primary text-xl lg:text-5xl">
				<div class="font-wg-bold">Application mobile</div>
				<div class="font-wg-light text-right">dans les grandes lignes</div>
			</div>
		</div>
		<SchemaMobile />
	</div>

	<div class="bg-secondary lg:relative h-full justify-center items-center w-full">
		<div class="flex justify-center">
			<img src={banner4} class="w-full lg:w-[800px] hidden lg:flex" alt="banner" />
			<img src={banner5} class="lg:w-[800px]" alt="banner" />
		</div>
	</div>
	<div
		class="lg:grid grid-cols-2 gap-10 font-pp-regular items-center text-justify mx-4 my-20 lg:mx-20 text-primary"
	>
		<div data-aos="fade-right" data-aos-duration="300">
			Le bootcamper accède à différents modules dans lesquels se trouvent des cours et des exercices
			qu’il peut effectuer. Il participe également à des battles créées par l’admin et s’en suit un
			classement.
		</div>

		<div class="lg:mt-0 mt-10" data-aos="fade-left" data-aos-duration="300">
			Le bootcamper accède au classement de la battle à laquelle il a participé.<br />
			Il a également accès à une partie profil dans laquelle il peut personnaliser ses informations personnelles.
		</div>
	</div>
</div>
