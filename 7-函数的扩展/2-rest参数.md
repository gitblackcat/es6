### rest参数
ES6引入`rest`参数(形式为`...参数名`),用于获取函数的多余参数,这样就不需要使用`arguments`对象了.`rest`参数搭配的变量是一个数组,该变量将多余的参数放入其中

```javascript
function add(...values){
    let sum = 0

    for(let val of values){
        sum += val
    }

    console.log(sum)
}

add(2,5,3) // 10
```

下面是一个`rest`参数代替`arguments`变量的例子

```javascript
// arguments变量的写法
const sortNumbers = () => Array.prototype.slice.call(arguments).sort()

// rest参数的写法
const sortNumbers = (...numbers) => numbers.sort()
```

**_注意,`rest` 参数之后不能再有其他参数(即只能是最后一个参数),否则会报错_**

```javascript
// 报错
function f(a, ...b, c) {
    // ...
}

// Uncaught SyntaxError: Rest parameter must be last formal parameter
```

函数的`length`属性,不包括`rest`参数

```javascript
(function(a) {}).length  // 1
(function(...a) {}).length  // 0
(function(a, ...b) {}).length  // 1
```