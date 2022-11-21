<script>
  export let data;
  import axios from "axios";
  import moment from "moment";
  moment.locale("ru");

  import AutoComplete from "simple-svelte-autocomplete";

  let post = data;

  let addRow = false;

  let selectedMarket = { id: null };

  let answerDataTemplate = {
    Market: { connect: {}, create: {} },
    price: "",
    availability: "available",
    message: "",
    Post: {
      connect: {
        id: post.id,
      },
    },
  };

  let marketDataTemplate = {
    name: "",
    phoneNumber: "",
    address: "",
    location: {},
    City: {
      connect: {
        id: post.User.City.id,
      },
    },
  };

  let newAnswerData = Object.assign({}, answerDataTemplate);
  let newMarketData = Object.assign({}, marketDataTemplate);

  $: if (selectedMarket.id) {
    newAnswerData.Market.connect = {
      id: selectedMarket.id,
    };

    delete newAnswerData.Market.create;
  } else {
    newAnswerData.Market.create = newMarketData;

    delete newAnswerData.Market.connect;
  }

  async function getMarkets(q) {
    let { data: marketsData } = await axios.get("/searchMarketsByName", {
      params: { q },
    });
    if (!marketsData.length) marketsData.push({ name: "Добавить новый" });
    return marketsData;
  }

  async function addNewMarket() {}

  async function saveAnswer() {
    if (
      ((!selectedMarket || !selectedMarket.id) &&
        (!newMarketData.address ||
          !newMarketData.name ||
          !newMarketData.phoneNumber)) ||
      !newAnswerData.price
    )
      return alert("Заполните все поля!");
    await axios.post(`/answers`, newAnswerData);
    let { data: postData } = await axios.get(`/posts/${post.id}`);
    post = postData;
    addRow = false;
    newAnswerData = Object.assign({}, answerDataTemplate);
    newMarketData = Object.assign({}, marketDataTemplate);
  }
</script>

<div class="container mx-auto">
  <div class="my-4">
    {post.content}
  </div>
  <table class="w-full border border-slate-500">
    <thead>
      <tr>
        <th class="border border-slate-700 p-2">Продавец</th>
        <th class="border border-slate-700 p-2">Цена</th>
        <th class="border border-slate-700 p-2">Наличие</th>
        <th class="border border-slate-700 p-2">Сообщение</th>
        <th class="border border-slate-700 p-2">Время</th>
      </tr>
    </thead>
    <tbody>
      {#each post.Answer as answer}
        <tr
          class={answer.availability == "available"
            ? "bg-green-500"
            : "bg-amber-300"}
        >
          <td class="border border-slate-700 p-2"
            >{answer.Market.name + " " + answer.Market.phoneNumber}</td
          >
          <td class="border border-slate-700 p-2">{answer.price}</td>
          <td class="border border-slate-700 p-2">{answer.availability}</td>
          <td class="border border-slate-700 p-2">{answer.message}</td>
          <td class="border border-slate-700 p-2"
            >{moment(answer.createdAt).format("DD MMM hh:ss")}</td
          >
        </tr>
      {/each}
      {#if addRow}
        <tr>
          <td class="border border-slate-700 p-2">
            <div>
              <AutoComplete
                searchFunction={getMarkets}
                delay="200"
                localFiltering={false}
                labelFieldName="name"
                valueFieldName="id"
                bind:selectedItem={selectedMarket}
              />
            </div>

            {#if selectedMarket.name == "Добавить новый"}
              <p class="my-2">
                <label for="new-market-name">Название</label>
                <input id="new-market-name" bind:value={newMarketData.name} />
              </p>

              <p class="my-2">
                <label for="new-market-address">Адрес</label>
                <input
                  id="new-market-address"
                  bind:value={newMarketData.address}
                />
              </p>

              <p class="my-2">
                <label for="new-market-phone">Номер телефона</label>
                <input
                  id="new-market-phone"
                  bind:value={newMarketData.phoneNumber}
                />
              </p>
            {/if}
          </td>
          <td class="border border-slate-700 p-2">
            <input type="number" bind:value={newAnswerData.price} />
          </td>
          <td class="border border-slate-700 p-2">
            <select bind:value={newAnswerData.availability}>
              <option value="available">available</option>
              <option value="request">request</option>
            </select>
          </td>
          <td class="border border-slate-700 p-2">
            <textarea bind:value={newAnswerData.message} />
          </td>
          <td class="border border-slate-700 p-2">
            <button
              on:click={saveAnswer}
              class="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >Сохранить</button
            >
          </td>
        </tr>
      {/if}
    </tbody>
  </table>
  {#if !addRow}
    <div class="flex items-center justify-center py-4">
      <button
        on:click={() => (addRow = true)}
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Добавить ответ
      </button>
    </div>
  {/if}
</div>
