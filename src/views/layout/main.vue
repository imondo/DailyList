<template>
    <div class="main-wrapper">
      <router-view></router-view>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
   @import "../../styles/minx.less";
   .main-wrapper {
     .px2rem(padding-top, 100);
     padding-bottom: 56px;
     background-color: #e9e9e9;
   }
   .main {
     width: 100%;
     .px2rem(padding-left, 10);
     .px2rem(padding-right, 10);
   }
</style>
<script type='text/ecmascript-6'>
   export default {

   }
</script>
