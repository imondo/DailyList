<template>
  <div class="date-wrapper">
    <ul>
      <li v-for="(date, index) in dateData" class="date-icon">
        <i class="iconfont" :class="date"></i>
      </li>
    </ul>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  .date-wrapper {
    ul {
      .date-icon {
        float: left;
      }
    }
  }
</style>
<script type='text/ecmascript-6'>
  import { getDaysInOneMonth } from 'utils/index';
  export default {
    date() {
      return {
        dateData: []
      };
    },
    created() {
      this.getDateData();
    },
    methods: {
      getDateData() {
        this.dateData = getDaysInOneMonth(2017, 9);
        console.log(this.dateData);
      }
    }
  }
</script>
