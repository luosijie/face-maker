import { createStore } from '@mpxjs/core'

const store = createStore({
  state: {
    ctx: null
  },
  mutations: {
    setCtx (state, data) {
      state.ctx = data
    }
  }
})

export default store
