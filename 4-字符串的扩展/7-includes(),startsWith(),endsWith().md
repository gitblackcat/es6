### includes(), startsWith(), endsWith()
传统上,JS中只有`indexOf`方法可用来确定一个字符串是否包含在另一个字符串中.ES6又提供了3个新方法

- `includes()`: 返回布尔值,表示是否找到了参数字符串
- `startsWith()`: 返回布尔值,表示参数字符串是否在源字符串的头部
- `endsWith()`: 返回布尔值,表示参数字符串是否在源字符串的尾部

```javascript
let s = 'Hello World!'
console.log(s.startsWith('H')) // true
console.log(s.endsWith('!')) // true
console.log(s.includes('r')) // true
```

这三个方法,都支持第二个参数,表示开始搜索的位置

```javascript
let s = 'Hello World!'
console.log(s.startsWith('o',4)) // true
console.log(s.endsWith('Hello',5)) // true
console.log(s.includes('Hello',6)) // false
```

上面代码表示,使用第二个参数`n`时,`endsWith`的行为与其他两个方法有所不同。它针对前`n`个字符,而其他两个方法针对从第`n`个位置直到字符串结束
