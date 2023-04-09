const path = require('path')

console.log(path.resolve('/foo/bar', './baz')) // 输出: 'D:\foo\bar\baz'
console.log(path.resolve('/foo/bar', '../baz')) // 输出: 'D:\foo\baz'
console.log(path.resolve('/dist', '..', '/dist', '/test')) // 输出：D:\test
console.log(path.resolve('/dist', 'dist'))  // D:\dist\dist

console.log(path.join('/foo/bar', './baz')) // 输出: '/foo/bar/baz'
console.log(path.join('/foo/bar', '../baz')) // 输出: '/foo/baz'
console.log(path.join('/dist', '..', '/dist', '/test')) // 输出：/dist/test
console.log(path.join('/dist', 'dist', )) // 输出：/dist/dist