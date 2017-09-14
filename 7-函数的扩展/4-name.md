### name属性
函数的`name`属性返回函数名

```javascript
function f(){}
console.log(f.name) // f
```

虽然该属性已被浏览器厂商普遍使用,但是直到`ES6`才被写入标准中

需要注意的是,`ES6` 对这个属性的行为做出了一些修改.如果将一个匿名函数赋值给一个变量,`ES5`的`name`属性,会返回空字符串,而`ES6`的`name`属性会返回实际的函数名

```javascript
var f = function () {}

// ES5
f.name // ""

// ES6
f.name // "f"
```

如果将一个具名函数赋值给一个变量,则`ES5`和`ES6` 的`name`属性都返回这个具名函数原本的名字

```javascript
const bar = function baz() {}

// ES5
bar.name // "baz"

// ES6
bar.name // "baz"
```

`Function`构造函数返回的函数实例,`name`属性的值为`anonymous`

`(new Function).name // "anonymous"`

`bind`返回的函数,`name`属性值会加上`bound`前缀

```javascript
function foo() {}
foo.bind({}).name // "bound foo"

(function(){}).bind({}).name // "bound "
```