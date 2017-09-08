<template>
  <div class="bottom-wrapper">
    <mu-paper>
      <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
        <mu-bottom-nav-item value="index" :to="{path: '/index'}" icon="today"/>
        <mu-bottom-nav-item value="everyDay" :to="{path: '/everyDay'}" icon="list"/>
        <mu-bottom-nav-item value="user" :to="{path: '/mine'}" icon="person"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  .bottom-wrapper {
    position: fixed;
    width: 100%;
    bottom: 0;
  }
</style>
<script type='text/ecmascript-6'>
  export default {
    data () {
      return {
        bottomNav: ''
      }
    },
    created() {
      this.bottomNav = this.$route.name;
    },
    methods: {
      handleChange (val) {
        this.bottomNav = val
      }
    }
  }
</script>