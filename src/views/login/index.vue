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

        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
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
  }
</style>
<script type='text/ecmascript-6'>
  import { register, login, smsCode } from 'api/login';
  export default {
    data() {
      return {
        isReg: false,
        loginData: {
          mobilePhoneNumber: '',
          password: '',
          smsCode: ''
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
      }
    }
  }
</script>