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

  const onSave = () => {
    window.Telegram.WebApp.close();
  };
</script>

<svelte:head>
  <title>Добавление автомобиля</title>
  <!-- <meta name="description" content="About this app" /> -->
</svelte:head>

<div class="space-y-4">
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

  {#if selectedModel}
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
      on:click={onSave}>Сохранить</button
    >
  {/if}
</div>
