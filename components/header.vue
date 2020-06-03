<template>
  <header class="header">
    <nuxt-link class="link" to="/">Meleton</nuxt-link>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.header {
  height: 50px;
  position: sticky;
  background-color: white;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 10px;
}

.link {
  text-decoration: none;
  color: black;
  font-size: 20px;
}

.link:hover {
  text-decoration: underline;
}
</style>
