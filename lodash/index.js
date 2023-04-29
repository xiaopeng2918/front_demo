const lodash = require('lodash')

const person = {
  name: 'Alice',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001'
  }
}
string = 'aa'
console.log(string.split('.'))
const zipCode = lodash.get(person, 'address.zip')
console.log(zipCode) // '10001'
