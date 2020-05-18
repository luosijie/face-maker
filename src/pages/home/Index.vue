<template>
  <div class="home">
    facer
  </div>
</template>

<script>
import Vue from 'vue'
import Web from 'reduce-loader!../../common/Web.vue'
import 'reduce-loader!./web'

export default Vue.extend({
  name: 'Home',
  components: {
    Web,
  },
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
  margin-top: 20px;
}
</style>
