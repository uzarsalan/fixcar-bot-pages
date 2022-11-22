<script>
  export let data = [];
  import moment from "moment";
  moment.locale("ru");
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
  {#each Object.keys(data) as key}
    <a class="card-link" href={`posts/${data[key].id}`}>
      <div
        class={`mb-3 p-6 bg-white border border-gray-200 rounded-lg shadow-md ${
          data[key].deleted
            ? "dark:bg-gray-600 dark:border-gray-500"
            : "dark:bg-gray-800 dark:border-gray-700"
        }`}
      >
        <!-- <a href="#">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            asasd
          </h5>
        </a> -->
        <p
          class="flex justify-between mb-3 font-bold text-gray-700 dark:text-white"
        >
          <span>
            {moment(data[key].createdAt).format("hh:ss")}
          </span>
          <span>
            {moment(data[key].createdAt).format("DD.MM")}
          </span>
          <!-- <span
              class="p-1 bg-white border border-gray-200 rounded-lg dark:bg-green-800 dark:border-green-700"
              >svdfsdcxzczxc</span
            > -->
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-white">
          {data[key].Car.User.City.name}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-white">
          {data[key].Car.brand}
          {data[key].Car.model}
          {data[key].Car.year || ""}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data[key].content}
        </p>
        <p class="mb-3 font-normal text-green-700 dark:text-green-400">
          <span>Ответов:</span>
          <span>
            {data[key]._count.Answer}
          </span>
          {#if data[key].deleted}
            <span
              class="px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              ЗАКРЫТ
            </span>
          {/if}
        </p>
        <!-- <button
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Позвонить
      </button> -->
      </div>
    </a>
  {/each}
</div>

<style>
  a.card-link:hover {
    text-decoration: none;
  }
</style>
