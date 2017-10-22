<template>
  <div class="details-wrapper">
    <div class="details-top">
        <span class="details-icon" v-touch:tap="done" :class="{done: detailsData.details.isToday}">
            <mu-icon value="done" class="details-icon-done"/>
            <i class="done-bg"></i>
        </span>
    </div>
    <div class="details-content main">
      <v-date :calendarData="detailsData.details.totalDays"></v-date>
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
        color: #FFFFFF;
        background-color: #E9E9E9;
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.117647), 0 1px 4px rgba(0, 0, 0, 0.117647);
        .done-bg {
          position: absolute;
          top: 0;
          left: 0;
          height: 100px;
          width: 100px;
          background-color: #03A9F4;
          border-radius: 50%;
          opacity: 0;
          -webkit-transform: scale(0);
          -ms-transform: scale(0);
          transform: scale(0);
          -webkit-transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
          transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
        }
        &.done {
          color: #FFFFFF;
          .done-bg {
            transform: scale(1);
            opacity: 1;
          }
        }
        .details-icon-done {
          font-size: 50px;
          position: absolute;
          left: 27px;
          top: 22px;
          z-index: 10;
        }
      }
    }
  }
</style>
<script type='text/ecmascript-6'>
  import date from 'components/date';
  import { getDetails, updateList } from 'api/list';
  import { getDaysInOneMonth } from 'utils/index';
  export default {
    data() {
      return {
        initDay: null,
        nowDay: null,
        detailsData: {
          details: {
            isToday: false,
            totalDays: []
          }
        },
        sum: null
      };
    },
    created() {
      this.getListDetails(this.$route.params.id);
    },
    methods: {
      getListDetails(id) {
        const vm = this;
        vm.initDay = getDaysInOneMonth.format('ymd');
        vm.nowDay = getDaysInOneMonth.init().nowDay;
        getDetails(id).then((res) => {
          if (res.status === 200) {
            vm.detailsData.details = res.data.details;
            if (vm.detailsData.details.yesterday !== vm.initDay) {
              vm.detailsData.details.isToday = false;
            }
            vm.sum = vm.detailsData.details.sumTotal;
          }
        });
      },
      done() {
        const vm = this;
        let details = vm.detailsData.details;
        let id = vm.$route.params.id;
        this.updateDay(details, id);
      },
      updateDay(details, id) {
        const vm = this;
        vm.initDay = getDaysInOneMonth.format('ymd');
        details.isToday = !details.isToday;
        let signRecord = {};
        let month = vm.nowDay.year + '-' + ((vm.nowDay.month + 1) < 10 ? '0' + (vm.nowDay.month + 1) : (vm.nowDay.month + 1));
        signRecord.month = month;
        signRecord.days = [];
        let day = details.totalDays.find((val) => val.month === month);
        if (!day) {
          details.totalDays.push(signRecord);
        }
        // 是否今天签到
        if (details.isToday) {

          for (let item of details.totalDays) {
            if (item.month === signRecord.month && details.yesterday != vm.initDay) {
              console.log(vm.nowDay.day);
              if (!item.days.includes(vm.nowDay.day)) {
                item.days.push(vm.nowDay.day);
              }
            }
          }
          vm.sum++;
          details.yesterday = vm.initDay;
          details.startDay = vm.resetDay(details.startDay, true);
        } else {

          for (let item of details.totalDays) {
            if (item.month === signRecord.month && details.yesterday === vm.initDay) {
              if (item.days.includes(vm.nowDay.day)) {
                item.days.pop();
              }
            }
          }
          vm.sum--;
          details.startDay = vm.resetDay(details.startDay);
          details.yesterday = vm.resetDay(details.yesterday);
        }

        let params = {
          details: {
            isToday: details.isToday,
            startDay: details.startDay,
            yesterday: details.yesterday,
            totalDays: details.totalDays,
            sumTotal: vm.sum
          }
        };

        updateList(params, id).then((res) => {
          if (res.status === 200) {
            console.log(this);
          }
        });
      },
      resetDay(day, check) {
        const vm = this;
        vm.initDay = getDaysInOneMonth.format('ymd');
        if (check) {
          if (day === null) {
            return vm.initDay;
          } else {
            return day;
          }
        } else {
          if (day === vm.initDay) {
            return null;
          }
        }
      }
    },
    components: {
      'v-date': date
    }
  }
</script>
