<script>
  export let data, helpers, requests, settings;
</script>

<a href="/">&leftarrow; Home</a>

<h1>{data.company.NAME}</h1>

<ul>
  {#each Object.entries(data.company) as entry}
    <li>{entry[0]}: {entry[1]}</li>
  {/each}
</ul>