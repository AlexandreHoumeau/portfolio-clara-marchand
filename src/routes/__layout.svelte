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

<nav>
  <!-- <p>This content will not be animated!</p> -->
</nav>
<Transition>
  <!-- Everything inside this transition component will be animated! -->
  <!-- In this example, that encompasses all the page contents besides the navbar. -->
  <slot />
</Transition>
