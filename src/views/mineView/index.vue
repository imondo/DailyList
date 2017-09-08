<template>
  <div class="mine-wrapper">
    <mu-list>
      <mu-list-item :value="1" :title="user.username" to="/mine/info">
        <mu-avatar src="../../src/assets/user.png" slot="leftAvatar"/>
        <i class="mu-item-right iconfont icon-gengduo"></i>
      </mu-list-item>
      <mu-list-item title="关于">
        <i class="mu-item-right iconfont icon-gengduo"></i>
      </mu-list-item>
      <mu-raised-button label="退出" @click="logOut()" class="demo-raised-button" secondary fullWidth/>
    </mu-list>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  .mine-wrapper {
    width: 100%;
    .demo-raised-button {
      margin-top: 15px;
    }
  }
</style>
<script type='text/ecmascript-6'>
  import store from 'store/index';
  export default {
    data() {
      return {
        user: {}
      }
    },
    created() {
      this.user = this.$store.getters.userInfo;
    },
    methods: {
      logOut() {
        store.dispatch('LoginOut').then(() => {
          this.$alert(true, '退出成功');
          this.$router.push({path: 'login'});
        })
      }
    }
  }
</script>
