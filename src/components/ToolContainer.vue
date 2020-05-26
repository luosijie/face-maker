<template>
  <div class="tool-container">
    <div class="header">
      <span class="cancel">
        <i class="iconfont-cancel"></i>
      </span>
      <span class="title"></span>
      <span class="confirm">
        <i class="iconfont-confirm"></i>
      </span>
    </div>
    <div class="main"></div>
  </div>
</template>

<script>
export default {
  name: 'ToolContainer',
  props: {
    title: {
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="less">
.tool-container {
  margin-top: 10px;
  width: 100%;
  text-align: center;
}
</style>
