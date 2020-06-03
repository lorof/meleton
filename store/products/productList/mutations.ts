import { MutationTree } from 'vuex'
import { ProductListState } from './state'
import { Product } from '~/interfaces/product'

const mutations: MutationTree<ProductListState> = {
  setProductList: (state, payload: Product[]) => {
    state.list = payload
  },

  removeProduct: (state, payload: string) => {
    state.list = state.list.filter(({ id }) => id !== payload)
  },

  addProduct: (state, payload: Product) => {
    state.list = [payload, ...state.list]
  },

  editProduct: (state, payload: Product) => {
    state.list = state.list.map((product) => {
      if (product.id === payload.id) {
        return payload
      }

      return product
    })
  }
}

export default mutations
