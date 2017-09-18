<template>
  <div class="info-wrapper">
    <mu-list>
      <mu-list-item title="头像" @click="uploadOpen">
        <mu-avatar src="../../src/assets/user.png" slot="rightAvatar"/>
      </mu-list-item>
    </mu-list>
    <mu-list>
      <mu-list-item title="昵称" :to="{name:'edit',params: {id:'username'}}">
        <span slot="right">{{userInfo.username}}</span>
      </mu-list-item>
      <mu-list-item title="性别" :to="{name:'edit',params: {id:'sex'}}">
        <span slot="right">{{userInfo.sex === '0' ? '男': '女'}}</span>
      </mu-list-item>
      <mu-list-item title="手机号码">
        <span slot="right">{{userInfo.mobilePhoneNumber}}</span>
      </mu-list-item>
    </mu-list>
    <mu-list>
      <mu-list-item title="签名" :to="{name:'edit',params: {id:'signature'}}">
        <span slot="right">{{userInfo.signature}}</span>
      </mu-list-item>
    </mu-list>
    <mu-raised-button label="修改密码" class="change-psd-button" fullWidth :to="{name:'edit',params: {id:'password'}}"/>
    <v-upload-Avatar title="上传头像" :bottomSheet="bottomSheet" class="hidden"></v-upload-Avatar>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  .info-wrapper {
    .mu-item-right {
      right: 12px;
    }
    .change-psd-button {
      margin-top: 15px;
      .mu-raised-button-label {
        color: red;
      }
    }
  }
</style>
<script type='text/ecmascript-6'>
  import uploadAvatar from 'components/uploadAvatar';
  export default {
    computed: {
      userInfo() {
        return this.$store.getters.userInfo;
      },
      bottomSheet() {
        return this.$store.getters.bottomSheet;
      }
    },
    methods: {
      uploadOpen() {
        const vm = this;
        vm.$store.commit("SET_SHEET", true);
      }
    },
    components: {
      'v-upload-Avatar': uploadAvatar
    }
  }
</script>