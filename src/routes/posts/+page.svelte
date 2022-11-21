<script>
  export let data = [];
  import moment from "moment";
  moment.locale("ru");
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
  {#each Object.keys(data) as key}
    <a href={`posts/${data[key].id}`}>
      <div
        class="mb-3 p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <!-- <a href="#">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            asasd
          </h5>
        </a> -->
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data[key].content}
        </p>
        <p class="mb-3 font-bold text-gray-700 dark:text-white">
          {moment(data[key].createdAt).format("DD MMM hh:ss")}
          <!-- <span
            class="p-1 bg-white border border-gray-200 rounded-lg dark:bg-green-800 dark:border-green-700"
            >svdfsdcxzczxc</span
          > -->
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
