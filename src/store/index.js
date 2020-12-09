import { createStore } from '@mpxjs/core'

const store = createStore({
  state: {
    cavas: null,
    ctx: null,
    elements: [],
    activeIndex: 1, // 当前编辑中的元素下标
    mode: 'background',   // background, text, image
    fontStyle: {
      opacity: 1,
      color: '#000000',
      borderColor: '#000000'
    }
  },
  mutations: {
    setCanvas (state, data) {
      state.canvas = data
    },
    setCtx (state, data) {
      state.ctx = data
    },
    setElements (state, data) {
      state.elements = data
    },
    setMode (state, data) {
      state.mode = data
    },
    setActiveIndex (state, data) {
      state.activeIndex = data
    },
    setFontStyle (state, { key, data }) {
      state.fontStyle[key] = data
    }
  }
})

export default store
