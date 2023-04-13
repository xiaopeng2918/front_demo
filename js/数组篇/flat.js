const nestedArray = [1, 2, [3, 4, [5, 6, [7, 0], [2, 4, 5]]]]

const flatNsetedArray1 = nestedArray.flat()
console.log(flatNsetedArray1) // [ 1, 2, 3, 4, [ 5, 6, [ 7, 0 ], [ 2, 4, 5 ] ] ]
const flatNsetedArray2 = nestedArray.flat(2)
console.log(flatNsetedArray2) // [ 1, 2, 3, 4, [ 5, 6, [ 7, 0 ], [ 2, 4, 5 ] ] ]
const flatNsetedArray3 = nestedArray.flat(3)
console.log(flatNsetedArray3)
