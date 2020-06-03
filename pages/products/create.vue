<template>
  <div>
    <ProductForm @submit="handleAddProduct" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

import ProductForm from '~/components/productForm.vue'
import { Product } from '~/interfaces/product'

export default Vue.extend({
  components: {
    ProductForm
  },

  methods: {
    ...mapActions({
      addProduct: 'products/productList/addProduct'
    }),
    handleAddProduct(product: Product) {
      this.addProduct(product)

      this.$router.push(product.id)
    }
  }
})
</script>
