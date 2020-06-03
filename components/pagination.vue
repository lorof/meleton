<template>
  <div class="pagination">
    <Button
      v-for="(page, index) in totalPages"
      :key="page"
      class="button"
      :class="{ isActive: currentPage === index }"
      @click="$emit('on-change-page', index)"
      >{{ page }}</Button
    >
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
    totalPages: {
      type: Number,
      default: 0
    },
    currentPage: {
      type: Number,
      default: 0
    }
  }
})
</script>

<style scoped>
.pagination {
  display: flex;
  margin: 20px 0;
}

.button:not(:last-child) {
  margin-right: 5px;
}

.isActive {
  background: lightcoral;
}
</style>
