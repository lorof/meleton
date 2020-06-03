<template>
  <div>
    <div class="actions">
      <SortButtons :sort-by="sortBy" @on-sort="sortBy = $event" />
      <nuxt-link class="link" to="products/create">Добавить</nuxt-link>
    </div>
    <Grid>
      <Card
        v-for="product in products.chunkedProducts"
        :key="product.id"
        v-bind="{ ...product }"
        @on-delete="removeProduct"
      />
    </Grid>
    <Pagination
      :total-pages="products.totalPages"
      :current-page="currentPage"
      @on-change-page="currentPage = $event"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import _chunk from 'lodash/chunk'

import Card from '~/components/card.vue'
import Grid from '~/components/grid.vue'
import SortButtons from '~/components/sortButtons.vue'
import Pagination from '~/components/pagination.vue'

export default Vue.extend({
  components: {
    Card,
    Grid,
    SortButtons,
    Pagination
  },

  data: () => ({
    sortBy: null,
    currentPage: 0
  }),

  computed: {
    ...mapGetters({
      sortingProducts: 'products/productList/sortingProducts'
    }),
    products() {
      const products = this.sortingProducts(this.sortBy)

      const chunkedProducts = _chunk(products, 2)

      return {
        chunkedProducts: chunkedProducts[this.currentPage],
        totalPages: chunkedProducts.length
      }
    }
  },

  methods: {
    ...mapActions({
      removeProduct: 'products/productList/removeProduct'
    })
  }
})
</script>

<style scoped>
.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.link {
  color: black;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
