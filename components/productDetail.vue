<template>
  <div class="detail">
    <div class="title">{{ title }}</div>
    <div>дата покупки: {{ createdAt | date }}</div>
    <div>цена: {{ price | currency }}</div>
    <div class="button">
      <Button @click.prevent="$emit('on-delete', id)">Удалить</Button>
      <Button
        @click.prevent="
          $emit('on-edit', {
            price,
            title,
            id,
            createdAt
          })
        "
        >Редактировать</Button
      >
    </div>
  </div>
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
      default: ''
    },
    createdAt: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped>
.detail {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  color: inherit;
  background-color: white;
  padding: 10px;
  height: 300px;
  margin: 20px 0;
}

.title {
  margin-bottom: 10px;
  font-size: 18px;
}

.button {
  margin-top: auto;
}
</style>
