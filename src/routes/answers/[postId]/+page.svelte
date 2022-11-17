<script>
  export let data;
  console.log(data);
  let statuses = {
    available: "В наличии",
    request: "Под заказ",
  };
</script>

<div>
  {#each Object.keys(data) as key}
    <div
      class="m-y-3 p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {data[key].Market.name}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {data[key].message}
      </p>
      <p class="mb-3 font-bold text-gray-700 dark:text-white">
        {data[key].price + " руб"}
        <span
          class="p-1 bg-white border border-gray-200 rounded-lg dark:bg-green-800 dark:border-green-700"
          >{statuses[data[key].availability]}</span
        >
      </p>
      <button
        on:click={() => window.WebApp.Telegram.openLink(window.location.href)}
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Позвонить
      </button>
    </div>
  {/each}
</div>
