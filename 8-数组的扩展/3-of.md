### Array.of()
`Array.of`方法用于将一组值转换为数组

```javascript
Array.of(3,11,8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1
Array.of(undefined) // [undefined]
Array.of() // []
```

该方法的主要目的,是弥补数组构造函数`Array()`的不足.因为参数个数的不同会导致`Array()`的行为产生差异

```javascript
new Array // []
new Array(2) // [,]
new Array(1,2) // [1,2]
```

上面代码中,`Array()`参数个数不同,表现形式不同.

`Array.of`方法可以用下面的代码模拟实现

```javascript
function ArrayOf(){
    return [].slice.call(arguments)
}
```