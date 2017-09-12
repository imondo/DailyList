<template>
  <div class="details-wrapper">
    <div class="details-top">
        <span class="details-icon" @click="done">
            <mu-icon value="done" class="details-icon-done"/>
        </span>
    </div>
    <div class="details-content main">
      <v-date></v-date>
    </div>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  @import "../../styles/minx.less";
  .details-wrapper {
    .details-top {
      width: 100%;
      height: 150px;
      line-height: 150px;
      background-color: #FFFFFF;
      text-align: center;
      .details-icon {
        position: relative;
        display: inline-block;
        height: 100px;
        width: 100px;
        margin: 20px;
        text-align: center;
        line-height: 100px;
        border-radius: 50%;
        webkit-transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
        transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
        color: rgba(0, 0, 0, 0.87);
        background-color: #E9E9E9;
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.117647), 0 1px 4px rgba(0, 0, 0, 0.117647);
        .details-icon-done {
          font-size: 50px;
          position: absolute;
          left: 27px;
          top: 19px;
        }
      }
    }
  }
</style>
<script type='text/ecmascript-6'>
  import date from 'components/date';
  export default {
    data() {
      return {

      };
    },
    methods: {
      done() {
        console.log(11);
      }
    },
    components: {
      'v-date': date
    }
  }
</script>
