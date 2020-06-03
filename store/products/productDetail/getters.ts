import { GetterTree } from 'vuex'

import { Product } from '~/interfaces/product'
import { RootState } from '~/store'

export const getters: GetterTree<RootState, RootState> = {
  findCard: (_, __, rootState: RootState) => (
    productId: string
  ): Product | undefined =>
    rootState.products.productList.list.find(({ id }) => id === productId)
}

export default getters
