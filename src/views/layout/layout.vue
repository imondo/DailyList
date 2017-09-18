<template>
  <div class="wrapper">
    <v-header>
      <slot>
        <span>保存</span>
      </slot>
    </v-header>
    <v-main></v-main>
    <v-bottom></v-bottom>
  </div>
</template>
<style lang="less" rel="stylesheet/less">

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
