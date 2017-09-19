<template>
  <div class="mine-wrapper">
    <div class="mine-top">
      <div class="mine-info">
        <span class="mine-info-img">
          <img :src="user.avatarImg?user.avatarImg:'../../src/assets/user.png'" alt="">
        </span>
        <h3>{{user.username}}</h3>
        <span class="site-subtitle">{{user.signature}}</span>
      </div>
    </div>
    <mu-list class="mine-list">
      <mu-list-item :value="1" title="编辑" to="/mine/info">
        <i class="mu-item-right iconfont icon-gengduo"></i>
      </mu-list-item>
      <mu-list-item title="关于">
        <i class="mu-item-right iconfont icon-gengduo"></i>
      </mu-list-item>
    </mu-list>
    <mu-raised-button label="退出账号" @click="open" class="logout-button" fullWidth/>
    <mu-dialog :open="dialog" @close="close">
      <h2>确认退出？</h2>
      <mu-flat-button slot="actions" @click="close" primary label="取消"/>
      <mu-flat-button slot="actions" primary @click="logOut" label="确定"/>
    </mu-dialog>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  .mine-wrapper {
    width: 100%;
    .mine-top {
      width: 100%;
      background-color: #FFFFFF;
      text-align: center;
      .mine-info {
        padding: 15px 0;
        .mine-info-img {
          display: inline-block;
          width: 100px;
          height: 100px;
          overflow: hidden;
          border-radius: 50%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .mine-list {
      .mu-item-wrapper {
        background-color: #FFFFFF;
      }
    }
    .logout-button {
      margin-top: 15px;
      .mu-raised-button-label {
        color: red;
      }
    }
  }
</style>
<script type='text/ecmascript-6'>
  import store from 'store/index';
  export default {
    data() {
      return {
        user: {},
        dialog: false
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
      },
      open () {
        this.dialog = true
      },
      close () {
        this.dialog = false
      }
    }
  }
</script>
