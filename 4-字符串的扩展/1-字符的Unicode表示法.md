### 字符的Unicode表示法
JS允许采用`\uxxxx`形式表示一个字符,其中`xxxx`表示字符的码点

`console.log("\u0061") // a`

但是这种表示法只限于`\u0000`到`\uFFFF`之间的字符.超出该范围的字符,必须用2个双字节的形式表达

`console.log("\uD842\uDFB7") // 𠮷`

`console.log("\u20BB7") // '₻7' `

上面的代码表示,如果直接在`\u`后面跟上超过`0xFFFF`的数值(比如`\u20BB7`),JS会理解成`\u20BB+7`,由于`\u20BB`是一个不可打印字符,所以就是'₻',后面跟一个7

ES6对这一点做了改进,只要将码点放入大括号,就能正确解读该字符

`console.log("\u{20BB7}") // 𠮷`

`console.log("\u{41}\u{42}\u{43}") // ABC`

```javascript
let hello = 123
console.log(hell\u{6F}) // 123
```

`console.log('\u{1F680}' === '\uD83D\uDE80') // true`

上面代码中,最后一个例子表明,大括号表示法与四字节的 UTF-16 编码是等价的

有了这种表示法之后,JS 共有5种方法可以表示一个字符

```javascript
'\z' === 'z'  // true
'\172' === 'z' // true
'\x7A' === 'z' // true
'\u007A' === 'z' // true
'\u{7A}' === 'z' // true
```