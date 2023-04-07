function sum(a, b) {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.7) {
      throw new Error("出错了")
    }
    resolve(a + b)
  })
}

sum(123, 456)
  .then(result => sum(result, 777))
  .then(result => sum(result, 888))
  .then(result => console.log(result))
  .catch(err => console.log('出错了，错误是：' + err))