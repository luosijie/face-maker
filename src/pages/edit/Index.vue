<template>
  <div class="home">
    <div class="image-container">
      <div class="add-image">
        <i class="iconfont icon-add-image"></i>
        <span class="label">添加片</span>
      </div>
    </div>
    <div class="menus">
      <div class="tool add-text">
        <i class="iconfont icon-text"></i>
        <span class="label">文字</span>
      </div>
      <div class="tool add-sticker">
        <i class="iconfont icon-sticker"></i>
        <span class="label">贴纸</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  created() {
    window.addEventListener('wxload', query => console.log('page1 wxload', query))
    window.addEventListener('wxshow', () => console.log('page1 wxshow'))
    window.addEventListener('wxready', () => console.log('page1 wxready'))
    window.addEventListener('wxhide', () => console.log('page1 wxhide'))
    window.addEventListener('wxunload', () => console.log('page1 wxunload'))

    if (process.env.isMiniprogram) {
      console.log('I am in miniprogram')
    } else {
      console.log('I am in Web')
    }
  },
  methods: {
    onClickJump() {
      window.location.href = '/test/list/123'
    },

    onClickOpen() {
      window.open('/test/detail/123')
    },
  },
})
</script>

<style lang="less">
.home {
  height: 100vh;
  .image-container {
    width: 100vw;
    height: 100vw;
    background-color: #f7f7f7;
    display: flex;
    align-items: center;
    justify-content: center;
    .add-image {
      color: #bbb;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      i {
        font-size: 4rem;
      }
      .label {
        margin-top: 1rem;
        font-size: 1rem;
      }
    }
  }
  .menus {
    width: 100vw;
    height: calc(~"100% - 100vw");
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    &>.tool {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 8rem;
      color: #1E3063;
      i {
        font-size: 2rem;
      }
      .label {
        margin-top: 1rem;
        font-size: 1rem;
      }
    }
  }
}
</style>
