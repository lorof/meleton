import VuexPersistence from 'vuex-persist'
import { RootState } from '~/store'

export default ({ store }: any) => {
  new VuexPersistence<RootState>({
    key: 'storage'
  }).plugin(store)
}
