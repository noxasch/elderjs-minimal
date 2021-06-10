<script>
  export let data, request, helpers; // data is mainly being populated from the @elderjs/plugin-markdown
  for (const key of Object.keys(data.markdown)) {
    data.markdown[key].forEach(item => {
      item.route = key;
    });
  }
</script>

<div class="content">
  ALL PAGE
  <ul>
    {#each Object.keys(data.markdown) as key}
      {#each data.markdown[key] as value }
        <li> <a href="{helpers.permalinks[key]({ slug: value.slug })}">{value.frontmatter.title}</a></li>
      {/each }
    {/each}
  </ul>
</div>
