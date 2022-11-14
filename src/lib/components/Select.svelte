<script>
  import { createEventDispatcher } from "svelte";

  export let options = [];

  let selectedOption = null;

  let dispatch = createEventDispatcher();

  $: if (selectedOption) dispatch("change", selectedOption);
</script>

<div>
  <label
    for="manufactorers"
    class="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-400"
    >Выберите марку автомобиля
  </label>
  <select
    bind:value={selectedOption}
    id="manufactorers"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option disabled selected>Выберите</option>
    {#each options as option}
      <option>{option}</option>
    {/each}
  </select>
</div>
