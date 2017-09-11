<template>
  <div class="add-wrapper">
    <mu-text-field hintText="输入你的目标" v-model="addData.goal" :required="true" errorText="这是必填项" @blur="check(addData.goal)"/><br/>
    <mu-text-field hintText="一些激励的话" v-model="addData.snippet" :required="true" errorText="这是必填项" @blur="check(addData.snippet)"/><br/>
    <mu-text-field hintText="计划坚持日期" v-model="addData.targetDate" :required="true" errorText="这是必填项" @blur="check(addData.targetDate)"/><br/>
    <mu-raised-button label="保存" class="demo-raised-button" secondary @click="addSave()"/>
    <!--<mu-date-picker hintText="选择日期"/><br/>-->
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
  const CODE = 200;
  const vm = this;
  export default {
    data() {
      return {
        addData: {
          goal: '',
          snippet: '',
          targetDate: ''
        }
      }
    },
    methods: {
      check(val) {
        console.log(val);
      },
      addSave() {
        addList(vm.addData).then((res) => {
          if (res.status === CODE) {
            vm.$router.push({path: '/index'});
          }
        });
      }
    }
  }
</script>
