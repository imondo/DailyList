<template>
  <div class="info-wrapper">
    <mu-list>
      <mu-list-item title="头像" @click="uploadOpen">
        <mu-avatar :src="userInfo.avatarImg?userInfo.avatarImg:'../../src/assets/user.png'" slot="rightAvatar"/>
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
    <v-upload-Avatar v-model="target" @onChange="uploadChange" class="hidden" ref="upload"></v-upload-Avatar>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  .info-wrapper {
    .mu-item-right {
      right: 12px;
    }
    .change-psd-button {
      margin-top: 15px;
    }
  }
  .upload {
    height: 100%;
  }
</style>
<script type='text/ecmascript-6'>
  import uploadAvatar from 'components/uploadAvatar';
  import { uploadAvatarImage, updateUser } from 'api/user';
  export default {
    data() {
      return {
        target: null
      }
    },
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
        this.$refs.upload.$el.childNodes[2].click();
      },
      uploadChange(files, name) {
        uploadAvatarImage(files).then((res) => {
          let avatarImg = JSON.parse(JSON.stringify(res)).url;
          this.$store.dispatch('UpdateUser', {avatarImg: avatarImg}).then((res) => {
            console.log(this.userInfo)
          })
        });
      }
    },
    components: {
      'v-upload-Avatar': uploadAvatar
    }
  }
</script>