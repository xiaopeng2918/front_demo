# jset 使用

1.babel 安装（因为使用 es6 语法）

```
npm install --save-dev babel-jest @babel/core @babel/preset-env

```

2.初始化配置文件

```
jest --init

```

3.在`jest.config.js`添加如下配置

```js
module.exports = {
  // ...其它配置
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
}
```

4.根目录下创建`babel.config.js`

```js
module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]]
}
```

配置之后就可以使用es6语法了