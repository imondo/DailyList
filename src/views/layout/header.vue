<template>
  <div>
    <i class="iconfont icon-fanhui left" @click="goBack()" v-show="back"></i>
    <span>{{title}}</span>
    <span class="edit-btn" v-show="editBtn" @click="saveEdit()">保存</span>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  @import "../../styles/minx.less";
  .header-wrapper {
    position: fixed;
    width: 100%;
    z-index: 2;
    font-family: 'Microsoft YaHei';
    font-weight: bold;
    .px2rem(font-size, 35);
    .px2rem(height, 100);
    letter-spacing: 2px;
    text-align: center;
    .px2rem(line-height, 100);
    .left {
      position: absolute;
      left: 15px;
    }
    .edit-btn {
      position: absolute;
      right: 15px;
    }
  }
</style>
<script type='text/ecmascript-6'>
  import store from 'store/index';
  export default {
    data() {
      return {
        title: '',
        back: false,
        editBtn: false
      }
    },
    created() {
      this.title = this.$route.meta.title;
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      saveEdit() {
        let params = {};
        params[this.$route.params.id] = store.state.user[this.$route.params.id];
        let pathFn = this.$route.params.id === 'password' ? 'UpdatePassword' : 'UpdateUser';
        params = this.$route.params.id === 'password' ? params[this.$route.params.id] : params;
        store.dispatch(pathFn, params).then(() =>{
          this.$router.go(-1);
        });
      }
    },
    watch: {
      '$route': function(to, from) {
        this.title = to.meta.title;
        this.back = this.$route.meta.back;
        this.editBtn = this.$route.meta.editBtn;
      }
    }
  }
</script>
