import { createStore } from '@mpxjs/core'

const store = createStore({
  state: {
    cavas: null,         // cnavas实例
    ctx: null,           // canvas上下文实例
    elements: [],        // canvas元素
    activeIndex: null,   // 当前编辑中的元素索引
    mode: 'background',  // 当前编辑模式：background, text, sticker
    fontStyle: {         // 文字默认样式
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
    // 添加文字
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
    // 添加贴图
    addSticker (state, data) {
      state.elements.push(data)
      state.activeIndex = state.elements.length - 1
    },
    // 删除当前选中
    deleteActiveELement (state) {
      state.elements.splice(state.activeIndex, 1)
      state.activeIndex = null
    },
    // 清空画布
    clear (state) {
      state.elements = []
      state.activeIndex = null
    }
  }
})

export default store
