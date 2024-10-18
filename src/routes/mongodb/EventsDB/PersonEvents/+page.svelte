<script lang="ts">
  import Header from "$lib/component/Header.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;

  const header_css = "sticky top-0 bg-green-900 py-3 text-left px-4";
</script>

<Header></Header>
<div class="w-11/12 mx-auto">
  <div class="prose py-8">
    <code class="text-white text-lg">EventsDB.Jobs</code>
  </div>

  <table class="table-auto w-full overflow-auto">
    <thead>
      <tr>
        <th class={header_css}>ID</th>
        <th class={header_css}>Name</th>
        <th class={header_css}>City</th>
        <th class={header_css}>Date</th>
        <th class={header_css}>User ID</th>
      </tr>
    </thead>
    <tbody class="bg-neutral-700">
      {#each data.personEvents as personEvent}
        <tr class="odd:bg-neutral-800">
          <td class="p-4">{personEvent._id}</td>
          <td class="p-4">{personEvent.Person.Name}</td>
          <td class="p-4">{personEvent.Location.City}</td>
          <td class="p-4">{personEvent.Event.Date}</td>
          <td class="p-4">{personEvent.Person.UserID}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
