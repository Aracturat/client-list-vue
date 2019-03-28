<template>
  <div>
    <div
      class="client-details client-details--empty"
      v-if="client === null"
    >Select a client in the list for detailed information.</div>
    <div class="client-details" v-if="client !== null">
      <img class="client-details__avatar" v-bind:src="client.general.avatar">
      <div class="client-details__info">
        <h1 class="client-details__name">{{ client.general.firstName }} {{client.general.lastName }}</h1>
        <div
          class="client-details__job"
          v-if="client.job !== null"
        >{{ client.job.title }} - {{ client.job.company }}</div>
        <div class="client-details__section" v-if="client.contact !== null">
          <h3 class="client-details__section-header">Contacts</h3>
          <ul class="client-details__section-content">
            <li>Email: {{ client.contact.email }}</li>
            <li>Phone: {{ client.contact.phone }}</li>
          </ul>
        </div>
        <div class="client-details__section" v-if="client.adress !== null">
          <h3 class="client-details__section-header">Address</h3>
          <ul class="client-details__section-content">
            <li>Country: {{ client.address.country }}</li>
            <li>City: {{ client.address.city }}</li>
            <li>Street: {{ client.address.street }}</li>
            <li>Zip code: {{ client.address.zipCode }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClientDetails",
  props: {
    client: Object
  }
};
</script>

<style lang="scss">
.client-details {
  display: flex;

  &--empty {
    font-size: 20px;
  }

  &__avatar {
    width: 128px;
    height: 128px;
    object-fit: cover;
  }

  &__info {
    margin-left: 20px;
  }

  &__name {
    margin-top: 0px;
  }

  &__section-header {
    margin-bottom: 5px;
  }

  &__section-content {
    list-style: none;
    padding-left: 0px;
    line-height: 1.5;
    margin: 0px;
  }
}
</style>
