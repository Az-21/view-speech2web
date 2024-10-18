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
        <th class={header_css}>Client</th>
        <th class={header_css}>Description</th>
        <th class={header_css}>Date</th>
        <th class={header_css}>Duration</th>
        <th class={header_css}>User ID</th>
      </tr>
    </thead>
    <tbody class="bg-neutral-700">
      {#each data.jobs as job}
        <tr class="odd:bg-neutral-800">
          <td class="p-4">{job._id}</td>
          <td class="p-4">{job.Person.Name}</td>
          <td class="p-4">{job.Task.Client}</td>
          <td class="p-4">{job.Task.Description}</td>
          <td class="p-4">{job.Task.Date}</td>
          <td class="p-4">{job.Task.Duration}</td>
          <td class="p-4">{job.Person.UserID}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
