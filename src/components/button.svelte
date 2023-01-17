<script>
	import { goto } from '$app/navigation';

	export let url;

	function handleClick() {
		goto(url);
	}
</script>

<button
	on:click={handleClick}
	class="bg-primary text-white font-pp-bold text-xl w-80 h-16 rounded-3xl"
>
	Voir le projet suivant
</button>
