<template>
  <div id="app">
    <router-view></router-view>
    <v-popup></v-popup>
  </div>
</template>

<script type='text/ecmascript-6'>
  import popup from 'components/popup/index';
  export default {
    components: {
      'v-popup': popup
    }
  }
</script>

<style lang="less" rel="stylesheet/less">

</style>
