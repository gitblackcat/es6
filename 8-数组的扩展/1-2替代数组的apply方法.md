### 替代数组的apply方法
由于扩展运算符可以展开数组,所以不再需要apply方法,将数组转为函数的参数了

```javascript
// ES5 的写法
function f(x, y, z) {
  // ...
}
var args = [0, 1, 2]
f.apply(null, args)

// ES6的写法
function f(x, y, z) {
  // ...
}
var args = [0, 1, 2]
f(...args)
```

下面是扩展运算符取代apply方法的一个实际的例子,应用Math.max方法,简化求出一个数组最大元素的写法

```javascript
// ES5 的写法
Math.max.apply(null, [14, 3, 77])

// ES6 的写法
Math.max(...[14, 3, 77])

// 等同于
Math.max(14, 3, 77)
```

上面代码中,由于 `JavaScript` 不提供求数组最大元素的函数,所以只能套用`Math.max`函数,将数组转为一个参数序列,然后求最大值.有了扩展运算符以后,就可以直接用`Math.max`了

另一个例子是通过`push`函数,将一个数组添加到另一个数组的尾部

```javascript
// ES5的 写法
var arr1 = [0, 1, 2]
var arr2 = [3, 4, 5]
Array.prototype.push.apply(arr1, arr2)

// ES6 的写法
var arr1 = [0, 1, 2]
var arr2 = [3, 4, 5]
arr1.push(...arr2)
```