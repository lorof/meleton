<template>
  <div></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  beforeCreate() {
    this.$router.push('/products')
  }
})
</script>
