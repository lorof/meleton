<template>
  <div class="buttons">
    <Button @click="$emit('on-sort', sortedByDateAsc ? 'dateDesc' : 'dateAsc')">
      <span v-if="sortedByDate" :class="{ inverted: sortedByDateDesc }">^</span>
      По Дате
    </Button>
    <Button
      @click="$emit('on-sort', sortedByPriceAsc ? 'priceDesc' : 'priceAsc')"
    >
      <span v-if="sortedByPrice" :class="{ inverted: sortedByPriceDesc }"
        >^</span
      >
      По стоимости
    </Button>
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
    sortBy: {
      type: String,
      default: ''
    }
  },

  computed: {
    sortedByPrice() {
      return this.sortBy === 'priceAsc' || this.sortBy === 'priceDesc'
    },

    sortedByDate() {
      return this.sortBy === 'dateAsc' || this.sortBy === 'dateDesc'
    },

    sortedByPriceAsc() {
      return this.sortBy === 'priceAsc'
    },

    sortedByPriceDesc() {
      return this.sortBy === 'priceDesc'
    },

    sortedByDateAsc() {
      return this.sortBy === 'dateAsc'
    },

    sortedByDateDesc() {
      return this.sortBy === 'dateDesc'
    }
  }
})
</script>

<style scoped>
.buttons {
  padding: 15px 0;
}

.inverted {
  display: inline-block;
  transform: rotate(180deg);
}
</style>
