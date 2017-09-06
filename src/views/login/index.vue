<template>
  <div class="login-wrapper">
    <div class="login">
      <h3 v-text="isReg?'注册':'登录'">登录</h3>
      <div class="login-content">
        <mu-text-field label="手机号码" hintText="请输入手机号码" v-model="loginData.mobilePhoneNumber" type="number" labelFloat/><br/>
        <mu-text-field label="密码" hintText="请输入密码" type="password" v-model="loginData.password" labelFloat/><br/>
        <mu-text-field label="验证码" hintText="请输入验证码" v-model="loginData.smsCode" labelFloat/><br/>
        <mu-raised-button label="登录" class="demo-raised-button" secondary v-show="!isReg"/>
      </div>
      <div class="login-bottom">
        <mu-raised-button label="注册" @click="isReg=true" class="demo-raised-button" secondary/>
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
      margin-top: 5px;
    }
    .demo-raised-button {
      width: 100%;
    }
  }
</style>
<script type='text/ecmascript-6'>
  import { login } from 'api/login';
  export default {
    data() {
      return {
        isReg: false,
        loginData: {
          mobilePhoneNumber: '',
          password: ''
        }
      }
    },
    methods: {
      saveLogin() {
        login(this.userData).then((res) => {
          console.log(res);
        });
      }
    }
  }
</script>