<template>
  <div id="app">
    <loader v-if="isLoading"></loader>
    <div class="page" v-if="!isLoading">
      <header class="header">The best client list</header>
      <main class="content">
        <div class="content__left">
          <div class="search-field">
            <input
              class="search-field__input"
              type="text"
              v-model="searchString"
              placeholder="Search client..."
            >
          </div>
          <div class="client-list" v-if="filteredClients.length > 0">
            <client
              class="client-list__item"
              v-for="client in filteredClients"
              v-bind:client="client"
              v-on:click.native="selectClient(client)"
            ></client>
          </div>
          <div
            class="client-list client-list--empty"
            v-if="filteredClients.length === 0"
          >Nothing has found</div>
        </div>
        <div class="content__right">
          <client-details v-bind:client="selectedClient"></client-details>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { ClientInfo } from "./client-info";
import Loader from "./components/Loader.vue";
import Client from "./components/Client.vue";
import ClientDetails from "./components/ClientDetails.vue";

function loadClient() {}

export default {
  name: "app",
  components: { Loader, Client, ClientDetails },
  data: function() {
    return {
      searchString: null,
      clients: [],
      selectedClient: null,
      publicPath: process.env.BASE_URL,
      isLoading: true
    };
  },
  methods: {
    selectClient: function(client) {
      this.selectedClient = client;
    },
    fetchData: function() {
      // Симулируем задержку
      setTimeout(() => {
        fetch(this.publicPath + "clients.json")
          .then(e => e.json())
          .then(result => (this.clients = result.map(e => new ClientInfo(e))))
          .then(e => (this.isLoading = false));
      }, 2000);
    }
  },
  computed: {
    filteredClients() {
      if (this.searchString) {
        return this.clients.filter(e =>
          e.searchString.toLowerCase().includes(this.searchString.toLowerCase())
        );
      } else {
        return this.clients;
      }
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style lang="scss">
body {
  margin: 0px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

* {
  box-sizing: border-box;
}

.page {
  margin: 0px auto;
  padding: 30px;
  height: 100vh;
  max-height: 100vh;
}

.header {
  height: 100px;
  font-weight: bold;
  font-size: 40px;
}

.content {
  display: flex;
  height: 100%;
  max-height: calc(100% - 100px);

  &__left {
    flex: 0 0 450px;
    border-right: 1px solid #c3afaf;
    padding-right: 10px;
  }

  &__right {
    flex: 1 1 auto;
    padding-left: 40px;
  }
}

.search-field {
  margin-bottom: 20px;

  &__input {
    width: 100%;
    height: 60px;
    font-size: 24px;
    padding: 2px 5px;
  }
}

.client-list {
  padding: 5px 10px 5px 0px;

  width: 100%;
  height: calc(100% - 20px - 60px - 20px);
  max-height: calc(100% - 20px - 60px - 20px);
  overflow-y: scroll;

  &__item {
    margin: 0px 0px 10px;
  }

  &--empty {
    overflow: hidden;
    font-size: 20px;
  }
}
</style>
