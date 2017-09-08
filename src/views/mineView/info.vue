<template>
  <div class="info-wrapper">
    <mu-list-item :title="userInfo.username"></mu-list-item>
    <mu-list-item :title="userInfo.mobilePhoneNumber"></mu-list-item>
  </div>
</template>
<style lang="less" rel="stylesheet/less">

</style>
<script type='text/ecmascript-6'>
  export default {
    data() {
      return {
        userInfo: null
      }
    },
    created() {
      this.userInfo = this.$store.getters.userInfo;
    }
  }
</script>