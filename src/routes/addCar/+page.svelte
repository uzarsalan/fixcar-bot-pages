<script>
  import Select from "$lib/components/Select.svelte";

  async function getManufacturerList() {
    return ["Toyota", "Mazda", "BMW"];
  }

  async function getModelsList(manufactorer) {
    return ["Harrier", "Allion", "Camry"];
  }

  let selectedManufactorer;
  let selectedModel;

  const onManufactorerChange = ({ detail }) => {
    selectedManufactorer = detail;
    console.log(detail);
  };

  const onModelChange = ({ detail }) => {
    selectedModel = detail;
    console.log(detail);
  };
</script>

<svelte:head>
  <title>Добавление автомобиля</title>
  <!-- <meta name="description" content="About this app" /> -->
</svelte:head>

<div>
  {#await getManufacturerList()}
    <div class="loader" />
  {:then manufacturerList}
    <Select on:change={onManufactorerChange} options={manufacturerList} />
  {/await}

  {#if selectedManufactorer}
    {#await getModelsList(selectedManufactorer)}
      <div class="loader" />
    {:then modelsList}
      <Select on:change={onModelChange} options={modelsList} />
    {/await}
  {/if}
</div>
