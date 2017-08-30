### RegExp构造函数
在 `ES5` 中,`RegExp`构造函数的参数有两种情况.

第一种情况是,参数是字符串,这时第二个参数表示正则表达式的修饰符（flag）.

```javascript
let re = new RegExp('abc','i')
//等价于
let re = /abc/i
```

第二种情况是,参数是一个正则表示式,这时会返回一个原有正则表达式的拷贝

```javascript
let re = new RegExp(/abc/i)
//等价于
let re = /abc/i
```

但是,ES5 不允许此时使用第二个参数添加修饰符,否则会报错

```javascript
let re = new RegExp(/abc/, 'i');
// Uncaught TypeError: Cannot supply flags when constructing one RegExp from another
```

ES6 改变了这种行为.如果RegExp构造函数第一个参数是一个正则对象,那么可以使用第二个参数指定修饰符.而且,返回的正则表达式会忽略原有的正则表达式的修饰符,只使用新指定的修饰符

```javascript
let re = new RegExp(/abc/ig,'i')
console.log(re.flags) // i
//等价于
let re = /abc/i  //原有的ig会被忽略(或者说是被覆盖掉)
```

#### flags属性
ES6为正则表达式新增了`flags`属性,会返回正则表达式的修饰符

```javascript
// ES5 的 source 属性
// 返回正则表达式的正文
/abc/ig.source
// "abc"

// ES6 的 flags 属性
// 返回正则表达式的修饰符
/abc/ig.flags
// 'gi'
```