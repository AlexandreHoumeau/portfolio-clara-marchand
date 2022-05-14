<script>
  import { fly } from "svelte/transition";
  export let url = "";
  const pageTransitionDuration = 500;
</script>

{#key url}
  <div in:fly|local={{  x:-500, duration: pageTransitionDuration, delay: pageTransitionDuration }}
    out:fly|local={{ x: 500, duration: pageTransitionDuration }}>
    <slot />
  </div>
{/key}
