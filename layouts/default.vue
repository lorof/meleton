<template>
  <div class="default-layout">
    <Header />
    <main class="main">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'

export default Vue.extend({
  components: {
    Header,
    Footer
  }
})
</script>

<style>
body {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background-color: lightblue;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

.default-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: 0 auto;
}

.main {
  flex: 1 0 auto;
}
</style>
