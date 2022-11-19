<script>
  export let data;
</script>

<div class="flex h-screen">
  <div class="m-auto">
    <a href={`tel://${data.number}`}>
      <button
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {data.number}
      </button>
    </a>
  </div>
</div>
