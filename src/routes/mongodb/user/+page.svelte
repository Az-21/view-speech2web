<script lang="ts">
  import Header from "$lib/component/Header.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<Header></Header>
<div class="w-11/12 mx-auto">
  <div class="prose py-8">
    <h2 class=" text-white">Home / MongoDB / User</h2>
    <code class="text-white text-lg">sample_mflix.users</code>
  </div>

  <table class="table-auto w-full overflow-auto">
    <thead>
      <tr>
        <th class="sticky top-0 bg-green-900 py-3 text-left px-4">ID</th>
        <th class="sticky top-0 bg-green-900 py-3 text-left px-4">Name</th>
        <th class="sticky top-0 bg-green-900 py-3 text-left px-4">Email</th>
      </tr>
    </thead>
    <tbody class="bg-neutral-700">
      {#each data.users as user}
        <tr class="odd:bg-neutral-800">
          <td class="p-4">{user._id}</td>
          <td class="p-4">{user.name}</td>
          <td class="p-4">{user.email}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
