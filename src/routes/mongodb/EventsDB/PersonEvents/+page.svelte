<script lang="ts">
  import Header from "$lib/component/Header.svelte";
  import { style } from "$lib/style.ts";
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<Header></Header>
<div class="w-11/12 mx-auto">
  <div class="prose prose-invert py-8">
    <code class="text-lg">EventsDB.Jobs</code>
  </div>

  <table class={style.table.self}>
    <thead>
      <tr>
        <th class={style.table.header}>ID</th>
        <th class={style.table.header}>Name</th>
        <th class={style.table.header}>City</th>
        <th class={style.table.header}>Date</th>
        <th class={style.table.header}>User ID</th>
      </tr>
    </thead>
    <tbody class={style.table.body}>
      {#each data.personEvents as personEvent}
        <tr>
          <td class={style.table.row}>{personEvent._id}</td>
          <td class={style.table.row}>{personEvent.Person.Name}</td>
          <td class={style.table.row}>{personEvent.Location.City}</td>
          <td class={style.table.row}>{personEvent.Event.Date}</td>
          <td class={style.table.row}>{personEvent.Person.UserID}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
