<!-- __layout.svelte -->
<script context="module">
  import "../app.css";
  export const load = async ({ url }) => ({
      props: {
          key: url,
      },
  });
</script>

<script>
  import Transition from '../components/Transition.svelte';
  export let key;
</script>

<Transition>
  <slot />
</Transition>
