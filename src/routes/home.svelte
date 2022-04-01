<script>
	import { fly } from 'svelte/transition';

	import Blob from '../components/blob.svelte';
	fly;
</script>

<div in:fly={{ y: -1000, duration: 3000 }} class="absolute text-center name">
	Clara Marchand <br />
	<div class="text-5xl sub">UX DESIGNER</div>
</div>
<Blob />

<style>
	.name {
    font-size: 170px;
		color: #6e44ff;
		font-family: 'Nightydemo';
	}

  .sub {
    font-family: 'Wagon-bold';
    font-size: 70px;
  }
</style>
