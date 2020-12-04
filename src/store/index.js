import { createStore } from '@mpxjs/core'

const store = createStore({
  state: {
    ctx: null,
    elements: [],
    mode: ''
  },
  mutations: {
    setCtx (state, data) {
      state.ctx = data
    },
    setElements (state, data) {
      state.elements = data
    },
    setMode (state, data) {
      state.mode = data
    }
  }
})

export default store
