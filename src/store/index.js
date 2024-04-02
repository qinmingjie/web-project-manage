import { createStore } from 'vuex'
import userStore from './user/user'

const store = createStore({
  state: {
    userStore
  }
})
export default store
