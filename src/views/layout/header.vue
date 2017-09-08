<template>
  <div class="header-wrapper">
    <i class="iconfont icon-fanhui left" @click="goBack()" v-show="back"></i>
    {{title}}
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  @import "../../styles/minx.less";
  .header-wrapper {
    font-family: 'Microsoft YaHei';
    font-weight: bold;
    .px2rem(font-size, 30);
    .px2rem(height, 100);
    letter-spacing: 2px;
    background-color: #FFFFFF;
    border-bottom: 1px solid #E9E9E9;
    text-align: center;
    .px2rem(line-height, 100);
    .left {
      position: absolute;
      left: 5px;
    }
  }
</style>
<script type='text/ecmascript-6'>
  export default {
    data() {
      return {
        title: '',
        back: false
      }
    },
    created() {
      this.title = this.$route.meta.title;
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    },
    watch: {
      '$route': function(to, from) {
        this.title = to.meta.title;
        this.back = this.$route.meta.back;
      }
    }
  }
</script>
