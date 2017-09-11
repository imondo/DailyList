<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <v-popup></v-popup>
  </div>
</template>

<script type='text/ecmascript-6'>
  import popup from 'components/popup/index';
  export default {
    data() {
      return {
        transitionName: 'slide-left'
      }
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
      }
    },
    components: {
      'v-popup': popup
    }
  }
</script>

<style lang="less" rel="stylesheet/less">

</style>
