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
      <li v-for="(date, index) in dateData" class="day" :class="{dateFirst:weekDay===index,dateLast:totalDays===index}">
        <span class="date-info" :class="{'date-index': index===startIndex}">{{date}}</span>
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
        border: 1px solid #FFFFFF;
        padding: 5px;
        color: #868686;
      }
      .dateFirst {
        color: #0a0a0a;
      }
      .dateFirst ~ .day {
        color: #0a0a0a;
      }
      .dateLast ~ .day {
        color: #868686;
      }
      .date-index {
        color: red;
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
        isColor: false,
        startIndex: 0
      };
    },
    created() {
      this.getDateData();
      console.log(22);

    },
    computed: {
      nowMonth() {
        return this.year + '-' + ((this.month + 1) < 10 ? '0' + (this.month + 1) : (this.month + 1));
      }
    },
    methods: {
      initDate(year, month) {
        const vm = this;
        vm.initData = getDaysInOneMonth.init(year, month);
        vm.weekDay = this.initData.weekday;
        vm.dateData = this.initData.days;
        vm.totalDays = (this.initData.totalDays + this.initData.weekday) - 1;
        console.log(this.$store.getters.calendarData)


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
        let start = val.startDay.split('-');
        let nowDay = vm.year + '-' + (vm.month + 1);
        let startDay = start[0] + '-' + start[1];
        if (nowDay === startDay) {
          console.log(11);
          vm.startIndex = vm.dateData.indexOf(Number(start[2]));
        } else {
          console.log(22);
        }
      },
      month(val) {
         console.log(this.startIndex)
      }
    }
  }
</script>
