const dayjs = require('dayjs')

console.log(dayjs('2023-04-14T18:49:08.000Z'))
// {
//   '$L': 'en',
//   '$d': 2023-04-14T18:49:08.000Z,
//   '$x': {},
//   '$y': 2023,
//   '$M': 3,
//   '$D': 15,
//   '$W': 6,
//   '$H': 2,
//   '$m': 49,
//   '$s': 8,
//   '$ms': 0
// }

const dayObj = dayjs('2023-04-14T18:49:08.000Z')
console.log(dayObj.$d) // date:2023-04-14T18:49:08.000Z

// 时间戳
const dateObj = dayObj.$d

console.log(dayjs(dateObj).valueOf()) //1681498148000
