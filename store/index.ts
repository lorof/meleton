import { ActionTree } from 'vuex'
import { ProductListState } from './products/productList/state'

export type RootState = {
  products: {
    productList: ProductListState
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('products/productList/getProductList')
  }
}
