<script>
	export let title;
	export let titleHeader;
	export let banner;
</script>
<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="overflow-hidden ">
	<div class="bg-secondary lg:relative lg:h-[493px] justify-center items-center w-full">
		<h1
			class="text-primary font-nighty absolute lg:top-10 left-2 lg:left-10 text-3xl lg:text-6xl"
			data-aos="fade-up"
			data-aos-duration="1000"
		>
			{titleHeader}
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
</div>
