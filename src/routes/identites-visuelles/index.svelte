<script>
	import AOS from 'aos';
	const banner = '/mockups/logo1.png';
	const banner2 = '/mockups/mockup2_cx.png';
	const banner3 = '/mockups/logo_CX.png';
	const banner4 = '/mockups/ferme_logo.png';
	const banner5 = '/mockups/mockup_ferme.png';
	const banner6 = '/mockups/green-IT-leaf.png';
	const banner7 = '/mockups/mockup_greenit.png';
	const banner8 = '/mockups/logo_split.png';
	const banner9 = '/mockups/mockup_split.png';
	import Button from '../../components/button.svelte';

	import { onMount } from 'svelte';
	onMount(() => {
		setTimeout(() => {
			AOS.refresh();
		}, 1000);
	});
</script>

<svelte:head>
	<title>Clara Marchand - Identités visuelles</title>
</svelte:head>

<div class="overflow-hidden">
	<div class="overflow-hidden ">
		<div class="bg-secondary lg:relative h-[200px] lg:h-[493px] justify-center items-center w-full">
			<h1
				class="text-primary font-nighty absolute lg:top-10 left-2 lg:left-10 text-3xl lg:text-6xl"
				data-aos="fade-up"
				data-aos-duration="1000"
			>
				Identites visuelles
			</h1>
			<div
				data-aos="fade-up"
				data-aos-delay="300"
				data-aos-duration="2000"
				class="flex justify-center"
			>
				<img src={banner} class="absolute top-10 lg:top-24 w-[300px] lg:w-[680px]" alt="banner" />
			</div>
		</div>
	</div>
</div>

<div class="my-20">
	<div class="flex items-top gap-4">
		<div data-aos="fade-right" data-aos-duration="600" class="h-px w-1/6 bg-primary mt-4" />
		<div data-aos="fade-right" data-aos-duration="600" class="text-primary text-3xl lg:text-5xl">
			<div class="font-wg-bold">Customer Experience</div>
			<div class="font-wg-light text-right">logotype</div>
		</div>
	</div>

	<div class=" my-10 lg:my-40 px-1 lg:px-16 justify-between lg:grid grid-cols-2 gap-16">
		<div
			data-aos="fade-right"
			data-aos-duration="1000"
			class="bg-secondary text-primary p-10 rounded-3xl lg:mb-0 mb-10"
		>
			<div class="font-wg-bold text-[40px]">Contexte</div>
			<div class="font-pp-regular text-[16px]">
				Allianz France créer une unité “Customer Experience” et nécessite d’un logo à utiliser sur
				toutes les communications print et digitales. Le but de ces communications est de
				sensibiliser les collaborateurs à la démarche expérience client.
			</div>
		</div>

		<div
			data-aos="fade-left"
			data-aos-duration="1000"
			class="bg-primary  text-secondary p-10 rounded-3xl"
		>
			<div class="font-wg-bold text-[40px]">Concept</div>
			<div class="text-[16px]">
				<div class="font-pp-regular text-[16px]">
					Utilisation du “o” et du “n” de Customer Experience pour représenter un client. Le but
					étant d’illustrer que le client est au centre des démarches et réflexions client.
				</div>
			</div>
		</div>
	</div>
	<div
		class=" my-10 lg:my-40 px-1 lg:px-16 justify-between items-center lg:grid grid-cols-2 gap-16"
	>
		<div data-aos="fade-right" data-aos-duration="1000" class="lg:mb-0 mb-10">
			<div class="flex justify-center">
				<img
					src={banner3}
					class="w-full object-fill lg:w-[425px] lg:h-[135px] rounded-lg"
					alt="banner"
				/>
			</div>
		</div>

		<div data-aos="fade-left" data-aos-duration="1000">
			<div class="flex justify-center">
				<img src={banner2} class="w-full rounded-lg" alt="banner" />
			</div>
		</div>
	</div>

	<div class="my-40">
		<div class="flex justify-end items-top gap-4">
			<div data-aos="fade-left" data-aos-duration="600" class="text-primary text-3xl lg:text-5xl">
				<div class="font-wg-bold">Ferme de Crasnes</div>
				<div class="font-wg-light text-left">logotype</div>
			</div>
			<div data-aos="fade-left" data-aos-duration="600" class="h-px w-1/6 bg-primary mt-4" />
		</div>
	</div>

	<div class=" my-10 lg:my-40 px-1 lg:px-16 justify-between lg:grid grid-cols-2 gap-16">
		<div
			data-aos="fade-right"
			data-aos-duration="1000"
			class="bg-secondary text-primary p-10 rounded-3xl lg:mb-0 mb-10"
		>
			<div class="font-wg-bold text-[40px]">Contexte</div>
			<div class="font-pp-regular text-[16px]">
				La Ferme de Crasnes nécessite d’un logo à positionner sur les packaging des produits qu’elle
				vend. Une des particularité de la ferme est qu’elle pratique l’agriculture de conservation
				des sols, c’est à dire qu’ils ne laissent jamais un sol nu, ce qui a pour objectif de
				développer et diversifier faune et flore.
			</div>
		</div>

		<div
			data-aos="fade-left"
			data-aos-duration="1000"
			class="bg-primary  text-secondary p-10 rounded-3xl"
		>
			<div class="font-wg-bold text-[40px]">Concept</div>
			<div class="text-[16px]">
				<div class="font-pp-regular text-[16px]">
					Ce logo met en avant la vie du sol et de la ferme, avec un focus sur le sol qui est mis en
					avant de part la couleur, les différentes couches et formes. Le but étant d’illustrer le
					fait que le sol de la ferme est un sol sain et sans laboure.
				</div>
			</div>
		</div>
	</div>

	<div
		class=" my-10 lg:my-40 px-1 lg:px-16 justify-between items-center lg:grid grid-cols-2 gap-16"
	>
		<div data-aos="fade-right" data-aos-duration="1000" class="lg:mb-0 mb-10">
			<div class="flex justify-center">
				<img
					src={banner4}
					class="w-full object-fill lg:w-[425px] lg:h-[230px] rounded-lg"
					alt="banner"
				/>
			</div>
		</div>

		<div data-aos="fade-left" data-aos-duration="1000">
			<div class="flex justify-center">
				<img src={banner5} class="w-full  rounded-lg" alt="banner" />
			</div>
		</div>
	</div>

	<div class="my-20">
		<div class="flex items-top gap-4">
			<div data-aos="fade-right" data-aos-duration="600" class="h-px w-1/6 bg-primary mt-4" />
			<div data-aos="fade-right" data-aos-duration="600" class="text-primary text-3xl lg:text-5xl">
				<div class="font-wg-bold">Green it</div>
				<div class="font-wg-light text-right">logotype</div>
			</div>
		</div>
	</div>

	<div class=" my-10 lg:my-40 px-1 lg:px-16 justify-between lg:grid grid-cols-2 gap-16">
		<div
			data-aos="fade-right"
			data-aos-duration="1000"
			class="bg-secondary text-primary p-10 rounded-3xl lg:mb-0 mb-10"
		>
			<div class="font-wg-bold text-[40px]">Contexte</div>
			<div class="font-pp-regular text-[16px]">
				Allianz France est dans une démarche de développement web “green”. Le logo sert à illustrer
				le groupe “Green it” qui a été créé afin de mettre en place des développements web et mobile
				écologiques.
			</div>
		</div>

		<div
			data-aos="fade-left"
			data-aos-duration="1000"
			class="bg-primary  text-secondary p-10 rounded-3xl"
		>
			<div class="font-wg-bold text-[40px]">Concept</div>
			<div class="text-[16px]">
				<div class="font-pp-regular text-[16px]">
					Utilisation d’une souris d’ordinateur pour représenter le développement web et mobile. On
					retrouve une feuille au bout de la souris afin de représenter la partie “green” des
					développements et réflexions web.
				</div>
			</div>
		</div>
	</div>

	<div
		class=" my-10 lg:my-40 px-1 lg:px-16 justify-between items-center lg:grid grid-cols-2 gap-16"
	>
		<div data-aos="fade-right" data-aos-duration="1000" class="lg:mb-0 mb-10">
			<div class="flex justify-center">
				<img src={banner6} class="w-full lg:w-[425px] lg:h-[230px] rounded-lg" alt="banner" />
			</div>
		</div>

		<div data-aos="fade-left" data-aos-duration="1000">
			<div class="flex justify-center">
				<img src={banner7} class="w-full rounded-lg" alt="banner" />
			</div>
		</div>
	</div>

	<div class="my-40">
		<div class="flex justify-end items-top gap-4">
			<div data-aos="fade-left" data-aos-duration="600" class="text-primary text-3xl lg:text-5xl">
				<div class="font-wg-bold">Split</div>
				<div class="font-wg-light text-left">logotype</div>
			</div>
			<div data-aos="fade-left" data-aos-duration="600" class="h-px w-1/6 bg-primary mt-4" />
		</div>
	</div>

	<div class=" my-10 lg:my-40 px-1 lg:px-16 justify-between lg:grid grid-cols-2 gap-16">
		<div
			data-aos="fade-right"
			data-aos-duration="1000"
			class="bg-secondary text-primary p-10 rounded-3xl lg:mb-0 mb-10"
		>
			<div class="font-wg-bold text-[40px]">Contexte</div>
			<div class="font-pp-regular text-[16px]">
				Split est une plateforme de partage de compétences et d'expériences digitales. Des jeunes
				qui viennent d’intégrer le monde professionnel vont former des personnes avec une expérience
				professionnelle plus importante.
			</div>
		</div>

		<div
			data-aos="fade-left"
			data-aos-duration="1000"
			class="bg-primary  text-secondary p-10 rounded-3xl"
		>
			<div class="font-wg-bold text-[40px]">Concept</div>
			<div class="text-[16px]">
				<div class="font-pp-regular text-[16px]">
					La partie iconographique du logo représente une ampoule qui illustre les idées et la
					connaissance; la typographie choisie est arrondie et sans empattement afin d’être en
					harmonie avec l’ampoule.
				</div>
			</div>
		</div>
	</div>

	<div
		class=" my-10 lg:my-40 px-1 lg:px-16 justify-between items-center lg:grid grid-cols-2 gap-16"
	>
		<div data-aos="fade-right" data-aos-duration="1000" class="lg:mb-0 mb-10">
			<div class="flex justify-center">
				<img src={banner8} class="w-full lg:w-[425px] lg:h-[230px] rounded-lg" alt="banner" />
			</div>
		</div>

		<div data-aos="fade-left" data-aos-duration="1000">
			<div class="flex justify-center">
				<img src={banner9} class="w-full rounded-lg" alt="banner" />
			</div>
		</div>
	</div>

	<div class="flex justify-center mt-10 mb-20">
		<Button url="allianz" />
	</div>
</div>
