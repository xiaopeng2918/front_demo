// Example 1: Using an array of key-value pairs
const keyValueArray = [
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3']
]
const objectFromArray = Object.fromEntries(keyValueArray)
console.log(objectFromArray) // Output: { key1: 'value1', key2: 'value2', key3: 'value3' }

// Example 2: Using a Map
const map = new Map()
map.set('key1', 'value1')
map.set('key2', 'value2')
map.set('key3', 'value3')
const objectFromMap = Object.fromEntries(map)
console.log(objectFromMap) // Output: { key1: 'value1', key2: 'value2', key3: 'value3' }
