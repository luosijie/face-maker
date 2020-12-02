import { createStore } from '@mpxjs/core'

const store = createStore({
  state: {
    ctx: null,
    elements: []
  },
  mutations: {
    setCtx (state, data) {
      state.ctx = data
    },
    setElements (state, data) {
      state.eles = data
    }
  }
})

export default store
