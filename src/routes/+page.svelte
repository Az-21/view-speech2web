<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1>Mflix Users</h1>

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    {#each data.users as user}
      <tr>
        <td>{user._id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
</style>
