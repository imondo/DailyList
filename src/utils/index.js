export function getDaysInOneMonth(year, month){
  month = parseInt(month, 10);
  var d= new Date(year, month, 0);
  let date =  d.getDate();
  let icon = [];
  for (let i = 0; i < date; i++) {
    icon.push('icon-rili' + i);
  }
  return icon;
}