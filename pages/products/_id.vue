<template>
  <div>
    <div v-if="product">
      <ProductForm v-bind="{ ...product }" @submit="handleEditProduct" />
    </div>
    <div v-else>
      <Detail
        v-bind="{ ...(findCard($route.params.id) || {}) }"
        @on-delete="handleRemoveProduct"
        @on-edit="product = $event"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

import { Product } from '~/interfaces/product'
import Detail from '~/components/productDetail.vue'
import ProductForm from '~/components/productForm.vue'

export default Vue.extend({
  components: {
    Detail,
    ProductForm
  },
  data: (): { product: Product | null } => ({
    product: null
  }),

  computed: {
    ...mapGetters({
      findCard: 'products/productDetail/findCard'
    })
  },

  methods: {
    ...mapActions({
      removeProduct: 'products/productList/removeProduct',
      editProduct: 'products/productDetail/editProduct'
    }),
    handleRemoveProduct(id: string) {
      this.removeProduct(id)

      this.$router.push('/')
    },
    handleEditProduct(product: Product) {
      this.editProduct(product)

      this.product = null
    }
  }
})
</script>
