export const getDaysInOneMonth = {
  init: function (year, month) {
    month = parseInt(month, 10);
    let arr = [];
    let init = {};
    // 当月天数
    let totalDays = new Date(year, month + 1, 0).getDate();

    // 前月天数
    let lastTotalDays = new Date(year, month, 0).getDate();

    // 该月1日的星期
    let weekDay = new Date(year, month, 1).getDay();
    weekDay === 0 ? weekDay = 7 : "";

    init.totalDays = totalDays;
    init.lastTotalDays = lastTotalDays;
    init.weekday = weekDay;

    // 填充前一个月的日期
    for (let i = weekDay - 1, num = lastTotalDays; i >= 0; i--, num--) {
      arr[i] = num;
    }

    // 填充该月及下一月的日期
    for (let i = weekDay, num = 1; i < 42; i++, num++) {
      arr[i] = num > totalDays ? num - totalDays : num;
    }

    init.days = arr;
    init.nowDay = this.nowDay();
    console.log(init);
    return init;
  },
  nowDay: function () {
    let nowDay = {};
    let time = new Date();
    nowDay.year = time.getFullYear();
    nowDay.month = time.getMonth();
    nowDay.day = time.getDate();
    return nowDay;
  },
  format: function (str) {
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth();
    let day = time.getDate();
    let monthName = [
        'January', 'February', 'March',
        'April', 'May', 'June',
        'July', 'Aguest', 'September',
        'October', 'November', 'December'
      ];
    return str.replace(/(y+)/g, year)
      .replace(/m+(\s+)/g, monthName[month] + '$1')
      .replace(/m+(\S+)/g, (month + 1) + '$1')
      .replace(/d+/g, day);
  },
  getDays: function(year, month){
     return this.init(year, month).days;
  }
};