<script>
  import { each } from "svelte/internal";

  export let data;
</script>

<table>
  {#each Object.keys(data) as key}
    {#if key == "data" && data[key] != null}
      {#each Object.keys(data[key]) as dataKey}
        <tr>
          <td>{dataKey}</td>
          <td>{data[key][dataKey]}</td>
        </tr>
      {/each}
    {:else if key !== "data"}
      <tr>
        <td>{key}</td>
        <td>{data[key]}</td>
      </tr>
    {/if}
  {/each}
</table>
