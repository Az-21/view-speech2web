<script>
  import "../app.css";
</script>

<slot></slot>

<style lang="postcss">
  :global(body) {
    @apply bg-neutral-800;
    @apply text-white;
  }
</style>
