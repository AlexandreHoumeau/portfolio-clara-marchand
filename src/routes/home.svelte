<script>
	import { fly } from 'svelte/transition';

	import Blob from '../components/blob.svelte';
	fly;
</script>

<div in:fly={{ y: -1000, duration: 3000 }} class="absolute lg:text-9xl text-6xl text-center name">
	Clara Marchand <br />
	<div class="lg:text-5xl text-3xl sub">UX DESIGNER</div>
</div>
<Blob />

<style>
	.name {
    /* font-size: 170px; */
		color: #6e44ff;
		font-family: 'Nightydemo';
	}
  .sub {
    font-family: 'Wagon-bold';
    /* font-size: 70px; */
  }
</style>
