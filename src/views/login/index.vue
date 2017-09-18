<template>
  <div class="login-wrapper">
    <div class="login">
      <h3 v-text="isReg?'注册':'登录'">登录</h3>
      <div class="login-content">
        <mu-text-field label="手机号码" hintText="请输入手机号码" v-model="loginData.mobilePhoneNumber" type="number" labelFloat/><br/>
        <mu-text-field label="密码" hintText="请输入密码" type="password" v-model="loginData.password" labelFloat/><br/>
        <div class="sms-code">
          <mu-text-field label="验证码" hintText="请输入验证码" v-model="loginData.smsCode" labelFloat v-show="isReg"/>
          <mu-raised-button label="验证" class="demo-raised-button" secondary v-show="isReg" @click="smsSave()"/>
        </div>
        <mu-raised-button label="登录" @click="saveLogin()" class="demo-raised-button" secondary v-show="!isReg" fullWidth/>
      </div>
      <div class="login-bottom">
        <mu-raised-button label="注册" @click="isReg=true" v-show="!isReg" class="demo-raised-button" secondary fullWidth/>
        <mu-raised-button label="注册" @click="saveRegister()" v-show="isReg" class="demo-raised-button" secondary fullWidth/>
      </div>
      <div class="login-other">
        <mu-raised-button label="已有账号" @click="isReg=false" v-show="isReg" class="demo-raised-button" secondary fullWidth/>
      </div>
      <div class="more-sign">
        <h6>社交账号登录</h6>
        <ul>
          <li><a href="/users/auth/wechat" class="weixin">
            <i class="iconfont icon-weixin"></i>
          </a></li>
          <li><a href="/users/auth/qq_connect" class="qq">
            <i class="iconfont icon-QQ"></i>
          </a></li>
          <li><a href="javascript:;" class="weibo" id="weibo" @click="weiBoLogin()">
            <i class="iconfont icon-weibo"></i>
          </a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  @import "../../styles/minx";
  .login-wrapper {
    height: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    .login {
      text-align: center;
    }
    .login-bottom {
      margin: 5px 0;
    }
    .login-content {
      .sms-code {
        width: 256px;
        text-align: left;
        .mu-text-field {
          display: inline-block;
          width: 64%;
        }
        .demo-raised-button {
          display: inline-block;
        }
      }
    }
    .more-sign {
      h6 {
        position: relative;
        margin: 20px 0 10px;
        font-size: 12px;
        color: #b5b5b5;
        &:before, &:after {
          content: "";
          border-top: 1px solid #b5b5b5;
          display: block;
          position: absolute;
          width: 60px;
          top: 5px;
        }
        &:after {
          right: 0;
        }
      }
      ul {
        li {
          display: inline-block;
          a {
            display: inline-block;
            width: 50px;
            height: 50px;
            line-height: 50px;
            .iconColor(@color) {
              color: @color;
            }
            &.weixin {
              .iconColor(#00bb29);
            }
            &.qq {
              .iconColor(#498ad5);
            }
            &.weibo {
              .iconColor(#e05244);
            }
            i {
              font-size: 30px;
              color: inherit;
            }
          }
        }
      }
    }
  }
</style>
<script type='text/ecmascript-6'>
  import { register, login, smsCode, weiBoAuth } from 'api/login';
  export default {
    data() {
      return {
        isReg: false,
        loginData: {
          mobilePhoneNumber: '18573159619',
          password: '123456',
          smsCode: '',
          signature: '',
          sex: ''
        }
      }
    },
    methods: {
      smsSave() {
        smsCode(this.loginData.mobilePhoneNumber).then((res) => {
          if (res.state == 200) {
            this.$alert(true, '发送成功');
          }
        });
      },
      saveLogin() {
        login(this.loginData).then((res) => {
          this.goPath(res);
        });
      },
      saveRegister() {
        register(this.loginData).then((res) => {
          this.goPath(res);
        });
      },
      goPath(res) {
        if (res.status == 200) {
          let user = res.data;
          this.$store.dispatch('SetToken', user.sessionToken).then(() => {
            this.$store.dispatch('GetUser', user).then(() => {
              this.$router.push({path: 'index'});
            })
          })
        }
      },
      weiBoLogin() {
        weiBoAuth();
      }
    }
  }
</script>