<script>
	import { fly } from 'svelte/transition';
	export let url = '';
	const pageTransitionDuration = 5000;
</script>

{#key url}
	<div in:fly={{ x: -5, duration: 500, delay: 500 }} out:fly={{ x: 5, duration: 500 }}>
		<slot />
	</div>
{/key}
