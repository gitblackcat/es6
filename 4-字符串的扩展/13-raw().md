### String.raw()
`String.raw`方法,往往用来充当模板字符串的处理函数,返回一个斜杠都被转义(即斜杠前面再加一个斜杠)的字符串,对应于替换变量后的模板字符串.

```javascript
let str = String.raw `Hi\n${2+3}!`
console.log(str) // 'Hi\n5!'
```

也就是说字符串原封不动返回,变量通过转换成字符串返回

如果字符串中的反斜杠已经做了转义,那么`String.raw`不会做任何处理

```javascript
let str = String.raw `Hi\\n${2+3}!`
console.log(str) // 'Hi\\n5!'
```

`String.raw`也可以作为正常函数使用,但实际生产上不常用,甚至不用

```javascript
var a = 5, b = 10
tag`Hello ${a + b} world ${a * b}`

// 转换为 =>
tag(['Hello ', ' world ', ''], 15, 50)
```

对比

```javascript
String.raw`Hi ${2+3}!` // "Hi 5!"

// => 转换为
String.raw({raw: ['Hi ', '!']}, 5)

//就是数组参数与单个参数穿插拼接
```

```javascript
String.raw({ raw: 'test' }, 0, 1, 2)
// 't0e1s2t'

// 等同于
String.raw({ raw: ['t','e','s','t'] }, 0, 1, 2)
```

