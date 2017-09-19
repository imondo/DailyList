<template>
  <div class="date-wrapper">
    <ul class="calendar">
      <li class="calendar-title">
        <h3>{{nowMonth}}</h3>
        <a href="javascript:;" class="calendar-prev-btn" @click="prev">
          <i class="iconfont icon-fanhui"></i>
        </a>
        <a href="javascript:;" class="calendar-next-btn" @click="next">
          <i class="iconfont icon-gengduo"></i>
        </a>
      </li>
      <li class="calendar-week">
        <span class="calendar-week-day">日</span>
        <span class="calendar-week-day">一</span>
        <span class="calendar-week-day">二</span>
        <span class="calendar-week-day">三</span>
        <span class="calendar-week-day">四</span>
        <span class="calendar-week-day">五</span>
        <span class="calendar-week-day">六</span>
      </li>
    </ul>
    <ul class="calendar-day">
      <li v-for="(date, index) in dateData" class="day" :class="{'date-first':weekDay===index,'date-last':totalDays===index}">
        <span class="date-info"
              :class="{'date-index':nowMonthData.indexOf(date) > -1,'date-now':changeMonth===nowMonth && nowDay.day===date}"
        >{{date}}</span>
        <span class="date-bg"></span>
      </li>
    </ul>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  .date-wrapper {
    .calendar {
      position: relative;
      .calendar-title {
        padding: 8px;
        font-size: 14px;
        text-align: center;
        border-bottom: 1px solid #e0e0e0;
        .calendar-prev-btn, .calendar-next-btn {
          position: absolute;
          top: 2px;
          padding: 5px;
          color: #0a0a0a;
        }
        .calendar-prev-btn {
          left: 50px;
        }
        .calendar-next-btn {
          right: 50px;
        }
      }
      .calendar-week {
        padding-top: 5px;
        font-size: 12px;
      }
    }
    .calendar-week-day, .day {
      float: left;
      width: 13%;
      margin-left: 1.0%;
      margin-bottom: 5px;
      text-align: center;
    }
    .calendar-day {
      margin-top: 5px;
      .day {
        padding: 5px;
        color: #868686;
        position: relative;
        .date-bg {
          position: absolute;
          top: -1px;
          left: 6px;
          height: 34px;
          background-color: #03A9F4;
          border-radius: 50%;
          opacity: 0;
          -webkit-transform: scale(0);
          -ms-transform: scale(0);
          transform: scale(0);
          -webkit-transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
          transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
          width: 34px;
        }
      }
      .date-first {
        color: #0a0a0a;
      }
      .date-first ~ .day {
        color: #0a0a0a;
      }
      .date-last ~ .day {
        color: #868686;
      }
      .date-now {
        color: #03A9F4;
      }
      .date-index {
        position: absolute;
        left: 15px;
        z-index: 10;
        color: #FFFFFF;
      }
      .date-index ~ .date-bg {
        transform: scale(1);
        opacity: 1;
      }

    }
  }
</style>
<script type='text/ecmascript-6'>
  import { getDaysInOneMonth } from 'utils/index';
  export default {
    props: ['calendarData'],
    data() {
      return {
        dateData: null,
        year: '',
        month: '',
        weekDay: '',
        totalDays: '',
        initData: null,
        nowMonthData: [],
        nowDay: null
      };
    },
    created() {
      this.getDateData();
    },
    computed: {
      nowMonth() {
        return this.year + '-' + ((this.month + 1) < 10 ? '0' + (this.month + 1) : (this.month + 1));
      },
      changeMonth() {
        return this.nowDay.year + '-' + ((this.nowDay.month + 1) < 10 ? '0' + (this.nowDay.month + 1) : (this.nowDay.month + 1));
      }
    },
    methods: {
      initDate(year, month) {
        const vm = this;
        vm.initData = getDaysInOneMonth.init(year, month);
        vm.weekDay = this.initData.weekday;
        vm.dateData = this.initData.days;
        vm.nowDay = vm.initData.nowDay;
        vm.totalDays = (this.initData.totalDays + this.initData.weekday) - 1;
      },
      getDateData() {
        const vm = this;
        let time = new Date();
        vm.year = time.getFullYear();
        vm.month = time.getMonth();
        this.initDate(vm.year, vm.month);
      },
      prev() {
        const vm = this;
        if (vm.month < 1) {
          vm.month = 11;
          vm.year--;
        } else {
          vm.month--;
        }
        vm.initDate(vm.year, vm.month);
      },
      next() {
        const vm = this;
        if (vm.month >= 11) {
          vm.month = 0;
          vm.year++;
        } else {
          vm.month++;
        }
        vm.initDate(vm.year, vm.month);
      }
    },
    watch: {
      calendarData(val) {
        const vm = this;
        for (let i in val) {
          if (val[i].month === vm.nowMonth) {
            vm.nowMonthData = val[i].days;
          } else {
            vm.nowMonthData = [];
          }
        }
        vm.$on('changeMonth', month => {
          for (let i in val) {
            console.log(val);
            if (val[i].month === month) {
              vm.nowMonthData = val[i].days;
            } else {
              vm.nowMonthData = [];
            }
          }
        })
      },
      nowMonth(newV, oldV) {
        const vm = this;
        if (newV != oldV) {
          vm.$emit('changeMonth', newV);
        }
      }
    }
  }
</script>
