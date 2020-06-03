<template>
  <nuxt-link class="card" :to="`products/${id}`">
    <div class="title">{{ title }}</div>
    <div>дата покупки: {{ createdAt | date }}</div>
    <div>цена: {{ price | currency }}</div>
    <Button class="button" @click.prevent="$emit('on-delete', id)"
      >Удалить</Button
    >
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'

import Button from '~/components/button.vue'

export default Vue.extend({
  components: {
    Button
  },

  props: {
    title: {
      type: String,
      required: true
    },
    createdAt: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>
.card {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  color: inherit;
  background-color: white;
  padding: 10px;
  height: 300px;
}

.title {
  margin-bottom: 10px;
  font-size: 18px;
}

.button {
  margin-top: auto;
}
</style>
