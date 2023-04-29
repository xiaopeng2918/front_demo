// let mySet = new Set()
// // add value
// mySet.add(5) // number
// mySet.add({ name: 'yxp' })
// mySet.add(true)
// // no duplication eg:
// mySet.add(true)
// mySet.add(5)
// mySet.add(6)
// console.log(mySet) // Set(4) { 5, { name: 'yxp' }, true, 6 }
// // only one 5 and true

// //delete
// mySet.delete(5)
// console.log(mySet)
// // has
// const resultSetHas = mySet.has(true)
// console.log(resultSetHas) // true
// // typeof Set
// console.log(typeof mySet) // Object
// console.log(mySet instanceof Object) // true

// /**
//  *
//  * Map
//  */
// // set
// let myMap = new Map()
// myMap.set('name', 'yxp') // set为小写
// myMap.set(1, 5) // 键可以为数字
// console.log(myMap) // Map(2) { 'name' => 'yxp', 1 => 5 }
// // delete
// myMap.delete('name')
// console.log(myMap) // Map(1) { 1 => 5 }
// // has
// console.log(myMap.has(1)) // true
// console.log(myMap.has('name')) // false
// // get
// console.log(myMap.get(1)) // 5
// // forEach
// myMap.set('name', 'yxp')
// myMap.set('age', 18)
// myMap.set({}, { name: 'yxp' })
// myMap.set('name', 'yxp11')
// console.log(myMap) // Map(4) { 1 => 5, 'name' => 'yxp', 'age' => 18, {} => { name: 'yxp' } }
// // forEach
// myMap.forEach(function (value, key) {
//   console.log(key + ':' + value + 'forEach')
// })

// // for of

// for ([key, value] of myMap) {
//   console.log(key + ':' + value)
// }

const myMap = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000]
])

console.log(myMap)
