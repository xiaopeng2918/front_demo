const jwt = require('jsonwebtoken')

const obj = {
  id: 1,
  name: 'yxp'
}

try {
  const token = jwt.sign(obj, 'yxp2918')
  console.log(token)
  const decode = jwt.verify(token, 'yxp2918')
  console.log(decode);
  if (!decode) {
    console.log(5555)
  }
} catch (err) {
  console.log(err)
}
