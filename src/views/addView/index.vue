<template>
  <div class="add-wrapper">
    <mu-text-field hintText="输入你的目标" v-model="addData.goal" :required="true" @blur="check(addData.goal)"/><br/>
    <mu-text-field hintText="一些激励的话" v-model="addData.snippet" :required="true" @blur="check(addData.snippet)"/><br/>
    <mu-date-picker hintText="计划坚持日期" v-model="addData.targetDate"/> <br/>
    <mu-raised-button label="保存" class="demo-raised-button" secondary @click="addSave()"/>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  .add-wrapper {
    position: absolute;
    left: 50%;
    margin-left: -127px;
    top: 50%;
    margin-top: -127px;
    text-align: center;
  }
</style>
<script type='text/ecmascript-6'>
  import { addList } from 'api/list';
  export default {
    data() {
      return {
        addData: {
          goal: '',
          snippet: '',
          targetDate: '',
          ownerId: ''
        }
      }
    },
    created() {
      this.addData.ownerId = this.$store.getters.userInfo.objectId;
    },
    methods: {
      check(val) {
        console.log(val);
      },
      addSave() {
        console.log(this.addData);
        addList(this.addData).then((res) => {
          if (res.status === 201) {
            this.$router.push({path: '/index'});
          }
        });
      }
    }
  }
</script>
