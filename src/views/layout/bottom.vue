<template>
  <div class="bottom-wrapper">
    <mu-paper>
      <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
        <mu-bottom-nav-item value="1" title="打卡" icon="bookmark border"/>
        <mu-bottom-nav-item value="0" title="我的" icon="person"/>
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
        bottomNav: 'movies',
        bottomNavColor: 'movies'
      }
    },
    methods: {
      handleChange (val) {
        this.bottomNav = val
      }
    }
  }
</script>