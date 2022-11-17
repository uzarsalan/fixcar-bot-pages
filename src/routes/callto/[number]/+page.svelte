<script>
  export let data;
</script>

<h1 on:click={() => (window.location.href = `tel://${data.number}`)}>
  {data.number}
</h1>
