import { Product } from '~/interfaces/product'

type State = {
  list: Product[]
}

const state = (): State => ({
  list: []
})

export type ProductListState = State

export default state
