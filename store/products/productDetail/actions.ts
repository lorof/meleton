import { ActionTree } from 'vuex'
import { ProductListState } from '~/store/products/productList/state'
import { Product } from '~/interfaces/product'

const actions: ActionTree<ProductListState, ProductListState> = {
  editProduct: async ({ dispatch }, payload: Product) =>
    await dispatch('products/productList/editProduct', payload, { root: true })
}

export default actions
