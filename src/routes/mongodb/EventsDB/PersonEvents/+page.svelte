<script lang="ts">
  import DatabaseCard from "$lib/component/DatabaseCard.svelte";
  import Header from "$lib/component/Header.svelte";
  import { style } from "$lib/style.ts";
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<Header></Header>
<div class="w-11/12 mx-auto">
  <div class="py-8">
    <DatabaseCard
      pythonIdentifier="sample_schema_01"
      mongodbIdentifier="EventsDB.PersonEvents"
      href="/mongodb/EventsDB/PersonEvents"
      showButton={false}
    />
  </div>

  <table class={style.table.self}>
    <thead>
      <tr>
        <!-- <th class={style.table.header}>ID</th> -->
        <th class={style.table.header}>Name</th>
        <th class={style.table.header}>City</th>
        <th class={style.table.header}>Date</th>
        <th class={style.table.header}>User ID</th>
      </tr>
    </thead>
    <tbody class={style.table.body}>
      {#each data.personEvents as personEvent}
        <tr>
          <!-- <td class={style.table.row}><code>{personEvent._id}</code></td> -->
          <td class={style.table.row}><code>{personEvent.Person.Name}</code></td>
          <td class={style.table.row}><code>{personEvent.Location.City}</code></td>
          <td class={style.table.row}><code>{personEvent.Event.Date}</code></td>
          <td class={style.table.row}><code>{personEvent.Person.UserID}</code></td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
