<template>
  <div>
    <mu-paper>
      <mu-bottom-nav :value="bottomNav" @change="handleChange">
        <mu-bottom-nav-item value="index" :to="{path: '/index'}" icon="today"/>
        <mu-bottom-nav-item>
          <mu-float-button icon="add" mini :to="{path: '/add'}" class="demo-float-button"/>
        </mu-bottom-nav-item>
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