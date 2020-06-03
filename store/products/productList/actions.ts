import { ActionTree } from 'vuex'
import { ProductListState } from './state'
import { productList } from '~/api/product/productList'
import { Product } from '~/interfaces/product'

const actions: ActionTree<ProductListState, ProductListState> = {
  getProductList: async ({ commit }): Promise<void> => {
    try {
      const data = await productList.getProductList()

      commit('setProductList', data)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  },

  removeProduct: ({ commit }, payload: string) =>
    commit('removeProduct', payload),

  addProduct: ({ commit }, payload: Product) => commit('addProduct', payload),

  editProduct: ({ commit }, payload: Product) => commit('editProduct', payload)
}

export default actions
