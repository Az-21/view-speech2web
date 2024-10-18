<script>
  import "../app.css";
</script>

<slot></slot>

<svelte:head>
  <script
    src="https://kit.fontawesome.com/3daf8f3a04.js"
    crossorigin="anonymous"
  ></script>
</svelte:head>

<style lang="postcss">
  :global(body) {
    @apply bg-neutral-800;
    @apply text-white;
  }
</style>
