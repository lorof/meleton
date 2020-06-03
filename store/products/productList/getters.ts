import { GetterTree } from 'vuex'
import _orderBy from 'lodash/orderBy'

import { ProductListState } from './state'
import { Product } from '~/interfaces/product'

export const getters: GetterTree<ProductListState, ProductListState> = {
  productSortedByPriceAsc: (state) => _orderBy(state.list, 'price', 'asc'),

  productSortedByPriceDesc: (state) => _orderBy(state.list, 'price', 'desc'),

  productSortedByDateAsc: (state) => _orderBy(state.list, 'createdAt', 'asc'),

  productSortedByDateDesc: (state) => _orderBy(state.list, 'createdAt', 'desc'),

  productUnSorted: (state) => state.list,

  sortingProducts: (_, getters) => (sortBy: string): Product[] => {
    switch (sortBy) {
      case 'priceAsc':
        return getters.productSortedByPriceAsc

      case 'priceDesc':
        return getters.productSortedByPriceDesc

      case 'dateAsc':
        return getters.productSortedByDateAsc

      case 'dateDesc':
        return getters.productSortedByDateDesc

      default:
        return getters.productUnSorted
    }
  }
}

export default getters
