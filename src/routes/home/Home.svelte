<script>
  import CompanyFinder from '../../components/CompanyFinder.svelte';
  export let data, helpers, requests, settings;
</script>

<style>
</style>

<svelte:head>
  <title>Elder.js Template: Home</title>
</svelte:head>

<CompanyFinder hydrate-client={{
  companies: data.companies.map((company) => ({ NAME: company.NAME, FID: company.FID }))
}} />

<ul>
  {#each data.companies as company}
    <li><a href="{helpers.permalinks.company({slug: company.FID})}">{company.NAME}</a></li>
  {/each}
</ul>
