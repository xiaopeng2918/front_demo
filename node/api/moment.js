const moment = require('moment')

const result = moment('2023-04-08 00:00:00')
console.log(Number('1680936514000')) // 1680936514000
console.log(moment(Number('1680936514000'))) // Moment<1970-01-20T18:55:36+08:00>

var total = [0, 1, 2, 3].reduce((acc, cur) => acc + cur, 0)
console.log(Number(new Date())) // 1680939577549
console.log(moment(Number(new Date())).format('YYYY-MM-DD')) // 2023-04-08
const dateyes = new Date(2023, 3, 6, 10, 30, 40)
console.log(dateyes) // 2023-04-06T02:30:40.000Z
console.log(moment(new Date()))
console.log(moment(new Date()) - moment(dateyes) > 0) //true
console.log(moment(new Date()) - moment(dateyes) < 0) // false
if (moment(new Date()) - moment(dateyes) > 0) {
  console.log('大于')
} else {
  console.log('小于')
}
