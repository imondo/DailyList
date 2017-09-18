<template>
  <div class="edit-wrapper">
    <mu-list v-show="name==='username'">
      <mu-list-item>
        <mu-text-field v-model="username" @blur="commitVal(username, 'USERNAME')" fullWidth/>
      </mu-list-item>
    </mu-list>
    <mu-list v-show="name==='sex'">
      <mu-list-item>
        <mu-radio label="男" name="group" nativeValue="0" v-model="sex" @input="commitVal(sex, 'USERSEX')" class="demo-radio" labelLeft/>
      </mu-list-item>
      <mu-list-item>
        <mu-radio label="女" name="group" nativeValue="1" v-model="sex" @input="commitVal(sex, 'USERSEX')"   class="demo-radio" labelLeft/>
      </mu-list-item>
    </mu-list>
    <mu-list v-show="name==='signature'">
      <mu-list-item>
        <mu-text-field v-model="signature" @blur="commitVal(signature, 'USERSIGN')" fullWidth/>
      </mu-list-item>
    </mu-list>
    <mu-list v-show="name==='password'">
      <mu-list-item>
        <mu-text-field label="旧密码" v-model="password.old_password" @blur="commitVal(password, 'USERPSD')" fullWidth/>
      </mu-list-item>
      <mu-list-item>
        <mu-text-field label="新密码" v-model="password.new_password" @blur="commitVal(password, 'USERPSD')" fullWidth/>
      </mu-list-item>
    </mu-list>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  .edit-wrapper {
    .demo-radio {
      width: 100%;
    }
    .mu-text-field {
      min-height: 30px;
    }
    .mu-text-field-content {
      padding: 0;
      margin: 0;
    }
  }
</style>
<script type='text/ecmascript-6'>
  import store from 'store/index';
  export default {
    data() {
      return {
        username: '',
        signature: '',
        sex: '',
        password: {
          old_password: '',
          new_password: ''
        },
        name: '',
      }
    },
    created(){
      const vm = this;
      vm.name = vm.$route.params.id;
      vm.signature = store.getters.userInfo.signature;
      vm.sex = store.getters.userInfo.sex;
      vm.username = store.getters.userInfo.username;
    },
    methods: {
      commitVal(val, name) {
        store.commit('SET_' + name, val);
      }
    }
  }
</script>
