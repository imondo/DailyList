<template>
  <div class="wrapper">
    <v-header class="header-wrapper"></v-header>
    <v-main class="main-wrapper"></v-main>
    <v-bottom class="bottom-wrapper"></v-bottom>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  @import "../../styles/skin";
  @import "../../styles/minx.less";
  .header-wrapper {
    background-color: @theme-color;
    border-bottom: 1px solid @border-color;
    color: @popup-font-color;
  }
  .main-wrapper {
    background-color: @body-color;
    position: absolute;
    left: 0;
    width: 100%;
    z-index: 1;
    .px2rem(top, 100);
    bottom: 56px;
    overflow-y: scroll;
  }
  .bottom-wrapper {
    background-color: @popup-font-color;
    z-index: 2;
  }
  .main {
    width: 100%;
    .px2rem(padding-left, 10);
    .px2rem(padding-right, 10);
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
