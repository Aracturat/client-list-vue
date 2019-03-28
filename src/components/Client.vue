<template>
  <div class="client">
    <img class="client__avatar" v-bind:src="client.general.avatar">
    <div class="client__info">
      <div class="client__name">{{ client.general.firstName }} {{ client.general.lastName }}</div>
      <div class="client__job-title">{{ client.job.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Client",
  props: {
    client: Object
  }
};
</script>

<style lang="scss">
.client {
  display: flex;
  padding: 5px;
  cursor: pointer;
  user-select: none;
  border: solid #c3afaf;
  border-width: 1px 0px;

  &__avatar {
    width: 64px;
    height: 64px;
    object-fit: cover;
  }

  &__info {
    margin-left: 15px;
  }

  &__name {
    font-size: 20px;
    font-weight: bold;
  }

  &__job-title {
    font-size: 16px;
  }
}
</style>
