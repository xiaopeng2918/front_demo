function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}
console.log(getRandomArbitrary(0, 10) + '    AAAAAA') // 获取0-10任意数， 含0不含10


function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}
console.log(getRandomInt(1, 5)) // 获取1 - 5之间任意数 ，含1不含5

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(getRandomIntInclusive(1, 5)) // 获取 1 - 5之间整数 含1含5
