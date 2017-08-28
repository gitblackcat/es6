### padStart(),padEnd()
ES7推出了字符串补全长度的功能.如果某个字符串未达指定长度,会在头部或尾部补全.

`padStart`用于头部补全,`padEnd`用于尾部补全

```javascript
let x = 'x',
    padX = x.padStart(5, 'ab')

console.log(x, padX) // x ababx
```

**_注意以上例子,`padStart`方法返回的是全新的一个字符串,原字符串不变.`padEnd`同理_**

```javascript
console.log('x'.padEnd(5,'ab')) // xabab
```

`padStart`和`padEnd`一共接受两个参数，第一个参数用来指定字符串的`最小长度`，第二个参数是用来`补全的字符串`

如果原字符串的长度大于等于指定的最小长度,则返回原字符串

```javascript
'xxx'.padStart('3','ab') // xxx
```

如果省略第二个参数,则会用空格来补全

```javascript
let x = 'x',
    startX = x.padStart(5)

console.log(startX) // '    x'
```