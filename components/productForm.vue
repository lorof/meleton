<template>
  <form class="form" @submit.prevent="onSubmit">
    <Input v-model="priceValue" required label="Цена" />
    <Input v-model="titleValue" required label="Название" />
    <Button html-type="submit">Сохранить</Button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { nanoid } from 'nanoid'
import dayjs from 'dayjs'

import Input from '~/components/input.vue'
import Button from '~/components/button.vue'
import { Product } from '~/interfaces/product'

export default Vue.extend({
  components: {
    Input,
    Button
  },

  props: {
    price: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    createdAt: {
      type: String,
      default: ''
    }
  },

  data: () => ({
    priceValue: '',
    titleValue: ''
  }),

  watch: {
    price: {
      immediate: true,
      handler(value: string) {
        this.priceValue = value
      }
    },
    title: {
      immediate: true,
      handler(value: string) {
        this.titleValue = value
      }
    }
  },

  methods: {
    onSubmit() {
      const product: Product = {
        price: this.priceValue,
        title: this.titleValue,
        id: this.id ? this.id : nanoid(),
        createdAt: this.createdAt ? this.createdAt : dayjs(new Date()).format()
      }

      this.$emit('submit', product)
    }
  }
})
</script>

<style scoped>
.form {
  background-color: white;
  padding: 20px;
  margin: 20px 0;
}
</style>
