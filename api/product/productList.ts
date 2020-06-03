// import axios from 'axios'
import data from './data.json'
import { Product } from '~/interfaces/product'

export const productList = {
  getProductList: () =>
    new Promise<Product[]>((resolve) => resolve((data as unknown) as Product[]))
}
