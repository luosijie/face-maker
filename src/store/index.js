import { createStore } from '@mpxjs/core'

const store = createStore({
  state: {
    cavas: null,
    ctx: null,
    background: null,
    elements: [],
    activeIndex: null, // 当前编辑中的元素下标
    mode: 'background',   // background, text, sticker
    fontStyle: {
      opacity: 1,
      fillStyle: '#000000',
      strokeStyle: '#000000'
    }
  },
  mutations: {
    setCanvas (state, data) {
      state.canvas = data
    },
    setCtx (state, data) {
      state.ctx = data
    },
    setBackground (state, data) {
      state.background = data
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
    },
    addText (state) {
      const size = 50
      const string = '请输入文字'
      const text = {
        type: 'text',
        data: string,
        scale: 1,
        size,
        left: 100,
        top: 100,
        rotate: 0,
        opacity: state.fontStyle.opacity,
        fillStyle: state.fontStyle.fillStyle,
        strokeStyle: state.fontStyle.strokeStyle
      }
      state.elements.push(text)
      state.activeIndex = state.elements.length - 1
    },
    addSticker (state, data) {
      state.elements.push(data)
      state.activeIndex = state.elements.length - 1
    },
    deleteActiveELement (state) {
      state.elements.splice(state.activeIndex, 1)
    },
    clear (state) {
      state.elements = []
      state.activeIndex = null
    }
  }
})

export default store
