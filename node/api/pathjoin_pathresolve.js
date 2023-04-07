const path = require('path')

console.log(path.resolve('/foo/bar', './baz')) // 输出: '/foo/bar/baz'
console.log(path.resolve('/foo/bar', '../baz')) // 输出: '/foo/baz'
console.log(path.resolve('/dist', '..', '/dist', '/test')) // 输出：/test

console.log(path.join('/foo/bar', './baz')) // 输出: '/foo/bar/baz'
console.log(path.join('/foo/bar', '../baz')) // 输出: '/foo/baz'
console.log(path.join('/dist', '..', '/dist', '/test')) // 输出：/dist/test
