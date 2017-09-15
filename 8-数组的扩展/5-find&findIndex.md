### 数组实例的find()和findIndex()
#### find()
数组实例的`find`方法,用于找出第一个符合条件的数组成员。它的参数是一个回调函数,所有数组成员依次执行该回调函数,直到找出第一个返回值为`true`的成员,然后返回该成员。如果没有符合条件的成员,则返回`undefined`

`find`方法的回调函数可以接受三个参数,依次为`当前的值`、`当前的位置`和`原数组`

```javascript
let a = [1, 5, -9, 7].find((val, index, arr) => val < 0)
console.log(a) // -9
```

#### findIndex()
数组实例的`findIndex`方法的用法与`find`方法非常类似,返回第一个符合条件的数组成员的位置,如果所有成员都不符合条件,则返回`-1`

```javascript
let a = [1, 5, -9, 7].findIndex((val, index, arr) => val < 0)
console.log(a) // 2
```

这两个方法都可以接受第二个参数,用来绑定回调函数的`this`对象

另外,这两个方法都可以发现`NaN`,弥补了数组的`IndexOf`方法的不足

```javascript
[NaN].indexOf(NaN)
// -1

[NaN].findIndex(y => Object.is(NaN, y))
// 0
```

上面代码中,`indexOf`方法无法识别数组的`NaN`成员,但是`findIndex`方法可以借助`Object.is`方法做到