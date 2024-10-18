<script lang="ts">
  export let pythonIdentifier = "Not Defined";
  export let mongodbIdentifier = "Not Defined";
  export let href;
</script>

<div class="w-full bg-stone-900 rounded-md p-4 text-lg">
  <div class="pl-4 py-2 flex gap-2 items-center">
    <i class="fa-solid fa-brands fa-python text-blue-500"></i>
    <code>{pythonIdentifier}</code>
  </div>

  <div class="pl-4 py-2 flex gap-2 items-center">
    <i class="fa-solid fa-database text-green-500"></i>
    <code>{mongodbIdentifier}</code>
  </div>

  <div class="pl-4 py-2 pt-12">
    <a {href}>
      <button
        type="button"
        class=" bg-green-700 hover:bg-green-800 rounded-md px-8 py-2"
        >View</button
      >
    </a>
  </div>
</div>
