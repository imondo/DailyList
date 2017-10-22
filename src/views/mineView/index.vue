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
      <mu-list-item title="编辑" to="/mine/info">
        <i class="mu-item-right iconfont icon-gengduo"></i>
      </mu-list-item>
      <mu-list-item title="关于" to="/mine/about">
        <i class="mu-item-right iconfont icon-gengduo"></i>
      </mu-list-item>
    </mu-list>
    <mu-list>
      <mu-list-item title="退出账号" v-touch:tap.stop="open" class="logout-button"></mu-list-item>
    </mu-list>
    <mu-dialog :open="dialog">
      <h2>确认退出？</h2>
      <mu-flat-button slot="actions" v-touch:tap.stop="close" primary label="取消"/>
      <mu-flat-button slot="actions" primary v-touch:tap.stop="logOut" label="确定"/>
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
      text-align: center;
      .mu-item-title {
        color: red;
      }
    }
  }
  .mu-flat-button {
    width: 50%;
  }
  .mu-flat-button-label {
    font-size: 16px;
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