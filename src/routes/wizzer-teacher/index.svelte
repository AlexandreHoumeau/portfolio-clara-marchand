<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import AOS from 'aos';
	import 'aos/dist/aos.css'; // You can also use <link> for styles

	const banner = 'static/mockups/WT_contenu1.png';
	const banner2 = 'static/mockups/WT_user.png';
	let visible = true;

	onMount(() => {
		let deviceHeihgt = window.innerHeight > 0 ? window.innerHeight : screen.height;
		AOS.init();

		setTimeout(() => {
			visible = false;
		}, 300);
	});
</script>

<svelte:head>
	<title>Wizzer Teacher</title>
</svelte:head>

<div>
	<div class="bg-secondary lg:relative lg:h-[493px] justify-center items-center w-full">
		<h1 class="text-primary font-nighty absolute lg:top-10 left-2 lg:left-10 text-3xl lg:text-6xl">
			Wizzer Teacher
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
			<div class="flex absolute bottom-5 justify-around w-3/4">
				<div in:fly={{ x: -200, delay: 500, duration: 1000 }} class="text-center">
					parcours utilisateurs<br /> wireframes
				</div>
				<div in:fly={{ x: -200, delay: 1400, duration: 1000 }} class="text-center">
					définition de l’UI <br /> prototypes
				</div>
				<div in:fly={{ x: -200, delay: 1400, duration: 1000 }} class="text-center">
					tests utilisateurs <br />mise en production
				</div>
			</div>
			<div class="w-3/4 h-px absolute bottom-2 border-dashed border-t  border-primary" />
			<div class="flex justify-between w-3/4">
				<div class=" relative">
					<div class="rounded-full bg-primary h-4 w-4" />
					<div in:fly={{ x: -200, delay: 0, duration: 1000 }} class="absolute top-4 w-40 -left-14">
						Décembre 2021
					</div>
				</div>
				<div class="relative">
					<div class="rounded-full bg-primary h-4 w-4" />
					<div
						in:fly={{ x: -200, delay: 600, duration: 1000 }}
						class="absolute top-4 w-28 -left-10"
					>
						Janvier 2021
					</div>
				</div>
				<div class="justify-end relative flex flex-col">
					<div class="rounded-full text-right bg-primary h-4 w-4" />
					<div
						in:fly={{ x: -200, delay: 1600, duration: 1000 }}
						class="absolute top-4 w-40 -left-8"
					>
						Février 2021
					</div>
				</div>
				<div class="justify-end relative flex flex-col">
					<div class="rounded-full text-right bg-primary h-4 w-4" />
					<div
						in:fly={{ x: -200, delay: 1600, duration: 1000 }}
						class="absolute top-4 w-40 -left-8"
					>
						Mars 2021
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
				Wizzer Teacher est une plateforme de bootcamp. Le projet était de créer la plateforme de
				bout en bout, que ce soit la partie admin permettant de gérer les utilisateurs, mettre à
				disposition des cours et exercices, créer des battles et avoir accès au classement de
				celles-ci. <br /><br /> La plateforme possède également une partie utilisateurs étudiants dans
				laquelle les étudiants se créer un compte, accèdent aux différents modules, réalisent des exercices
				et participent aux battles de tests.
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
				<div class="font-wg-bold">Utilisateurs bootcamper</div>
				<div class="font-wg-light text-right">dans les grandes lignes</div>
			</div>
		</div>

		<div
			class="flex items-center font-pp-regular justify-center mt-20 relative text-xs text-primary"
		>
			<div
				data-aos="fade-right"
				data-aos-duration="300"
				class="shadow flex justify-center items-center lg:w-36 lg:h-16 text-center rounded"
			>
				connexion/<br />inscription
			</div>
			<div
				data-aos="fade-right"
				data-aos-duration="300"
				data-aos-delay="100"
				class="bg-primary h-px w-24"
			/>

			<div class="flex flex-col justify-center items-center">
				<div
					data-aos="fade-top"
					data-aos-duration="300"
					data-aos-delay="250"
					class="shadow p-1 flex justify-center items-center lg:w-36 lg:h-16 text-center rounded"
				>
					utilisateurs
				</div>
				<div
					data-aos="fade-top"
					data-aos-duration="300"
					data-aos-delay="200"
					class="bg-primary h-24 w-px"
				/>
				<div
					data-aos="fade-right"
					data-aos-duration="300"
					data-aos-delay="200"
					class="shadow p-1 flex justify-center items-center lg:w-36 lg:h-16 text-center rounded"
				>
					home page
				</div>
				<div
					data-aos="fade-top"
					data-aos-duration="300"
					data-aos-delay="200"
					class="bg-primary h-24 w-px"
				/>
				<div
					data-aos="fade-top"
					data-aos-duration="300"
					data-aos-delay="250"
					class="shadow p-1 flex justify-center items-center lg:w-36 lg:h-16 text-center rounded"
				>
					compte
				</div>
			</div>

			<div
				data-aos="fade-right"
				data-aos-duration="300"
				data-aos-delay="300"
				class="bg-primary h-px w-24"
			/>

			<div class="flex flex-col mt-auto items-center">
				<div
					data-aos="fade-right"
					data-aos-duration="300"
					data-aos-delay="400"
					class="shadow p-1 flex justify-center items-center lg:w-36 lg:h-16 text-center rounded"
				>
					modules
				</div>
				<div
					data-aos="fade-bottom"
					data-aos-duration="300"
					data-aos-delay="500"
					class="bg-primary h-24 w-px"
				/>
				<div
					data-aos="fade-bottom"
					data-aos-duration="300"
					data-aos-delay="600"
					class="shadow p-1 flex justify-center items-center lg:w-36 lg:h-16 text-center rounded"
				>
					cours
				</div>
			</div>

			<div
				data-aos="fade-right"
				data-aos-duration="300"
				data-aos-delay="700"
				class="bg-primary h-px w-24"
			/>

			<div class="flex flex-col mt-auto items-center">
				<div
					data-aos="fade-right"
					data-aos-duration="300"
					data-aos-delay="800"
					class="shadow p-1 flex justify-center items-center lg:w-36 lg:h-16 text-center mr-auto rounded"
				>
					exercices
				</div>
				<div
					data-aos="fade-bottom"
					data-aos-duration="300"
					data-aos-delay="900"
					class="bg-primary h-24 w-px mr-auto ml-16"
				/>
				<div class="flex items-center">
					<div
						data-aos="fade-right"
						data-aos-duration="300"
						data-aos-delay="1000"
						class="shadow p-1 flex justify-center items-center lg:w-36 lg:h-16 text-center rounded"
					>
						battles
					</div>
					<div
						data-aos="fade-right"
						data-aos-duration="300"
						data-aos-delay="1000"
						class="bg-primary h-px w-20"
					/>
					<div
						data-aos="fade-right"
						data-aos-duration="300"
						data-aos-delay="1200"
						class="shadow p-1 flex justify-center items-center lg:w-36 lg:h-16 text-center rounded"
					>
						battles
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="bg-secondary lg:relative h-full justify-center items-center w-full">
		<div class="flex justify-center">
			<img src={banner2} class="w-full lg:w-[1500px]" alt="banner" />
		</div>
	</div>
</div>

<style>
	.path {
		stroke-dasharray: 100;
		stroke-dashoffset: 1000;
		animation: dash 5s linear forwards;
	}

	@keyframes dash {
		to {
			stroke-dashoffset: 0;
		}
	}
</style>
