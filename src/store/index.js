import { createStore } from '@mpxjs/core'

const store = createStore({
  state: {
    ctx: null,
    eles: []
  },
  mutations: {
    setCtx (state, data) {
      state.ctx = data
    },
    setEles (state, data) {
      state.eles = data
    }
  }
})

export default store
