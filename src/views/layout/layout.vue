<template>
  <div class="wrapper">
    <v-header class="header-wrapper"></v-header>
    <v-main class="main-wrapper"></v-main>
    <v-bottom class="bottom-wrapper"></v-bottom>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  @import "../../styles/skin";
  .header-wrapper {
    background-color: @theme-color;
    border-bottom: 1px solid @border-color;
    color: @popup-font-color;
  }
  .main-wrapper {
    background-color: @body-color;
  }
  .bottom-wrapper {
    background-color: @popup-font-color;
  }
</style>
<script type='text/ecmascript-6'>
  import header from './header.vue'
  import main from './main.vue'
  import bottom from './bottom.vue'
  export default {
    name: 'layout',
    components: {
      'v-header': header,
      'v-main': main,
      'v-bottom': bottom
    }
  }
</script>
