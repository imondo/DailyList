<template>
  <div class="header-wrapper">
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
  }
</style>
<script type='text/ecmascript-6'>
  export default {
    data() {
      return {
        title: ''
      }
    },
    created() {
      this.title = this.$route.meta.title;
    },
    watch: {
      '$route': function(to, from) {
        this.title = to.meta.title;
      }
    }
  }
</script>
