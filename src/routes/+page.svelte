<script>
  import Header from "$lib/component/Header.svelte";
  import DatabaseCard from "$lib/component/DatabaseCard.svelte";
</script>

<Header />

<div class="mx-auto w-11/12">
  <div class="pt-12 grid grid-cols-2 gap-12">
    <DatabaseCard
      pythonIdentifier="sample_schema_01"
      mongodbIdentifier="EventsDB.PersonEvents"
      href="/mongodb/EventsDB/PersonEvents"
    />
    <DatabaseCard
      pythonIdentifier="task_schema_01"
      mongodbIdentifier="EventsDB.Jobs"
      href="/mongodb/EventsDB/Jobs"
    />
  </div>
</div>
