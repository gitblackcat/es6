### Array.from()
`Array.from`方法用于将两类对象转为真正的数组(原对象保持不变,是返回一个新的数组): `类似数组的对象(array-like object)`和`可遍历(iterable)对象`(包括ES6新增的数据结构`Set`和`Map`)

```javascript
let obj = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
}

// ES5写法
let arr1 = [].splice.call(obj)

// ES6写法
let arr2 = Array.from(obj)

console.log(obj) // {a: "aa", b: "bb", c: "cc", length: 3}
console.log(arr1) // ['a','b','c']
console.log(arr2) // ['a','b','c']
```

**_需要注意的是,对象的属性,必须是按照顺序的索引_**

```javascript
let obj = {
    'a': 'aa',
    'b': 'bb',
    'c': 'cc',
    length: 3
}

let arr = Array.from(obj)

console.log(arr) // [undefined,undefined,undefined]
```

```javascript
let obj = {
    '0': 'aa',
    '2': 'bb',
    '4': 'cc',
    length: 3
}

let arr = Array.from(obj)

console.log(arr) // ['aa',undefined,'bb']
```

实际应用中,常见的类似数组的对象是`DOM`操作返回的`NodeList`集合,以及函数内部的`arguments`对象.`Array.from`都可以将它们转给真正的数组

```javascript
let divs = document.querySelectorAll('div'),
    arr = Array.from(divs)

console.log(arr) // [div, div, div, div, div] 每个成员还是单独的元素对象
```

只要是部署了`Iterator`接口的数据结构,`Array.from`都能将其转为数组

```javascript
Array.from('Hello')
// ['H','e','l','l','o']

let namesSet = new Set(['a','b'])
Array.from(namesSet) // ['a','b']
```

如果参数是一个真正的数组,那么会返回一个新的一模一样的数组

值得提醒的是,扩展运算符`...`也可以将某些数据结构转给数组

```javascript
//arguments对象
function foo(){
    let args = [...arguments]
}

//NodeList对象
console.log([...document.querySelectorAll('div')]) 
// [div, div, div, div, div] 每个成员还是单独的元素对象
```

扩展运算符背后调用的是遍历器接口(`Symbol.iterator`),如果一个对象没有部署该接口,就无法转换.`Array.from`方法还支持类似数组的对象.所谓类似数组的对象,本质特征只有一点,即必须有`length`属性.因此,任何有`length`属性的对象,都可以通过`Array.from`方法转给数组

```javascript
Array.from({length: 3}) // [undefined,undefined,undefined]
```

从以上可以推出,`Array.from`方法的对象转数组,是需要遍历的,而遍历次数由`length`决定(也就是说数组长度由`length`决定),如果没有`length`,那么生成的数组为空

```javascript
let obj = {
    '0': 'a',
    '1': 'b',
    '2': 'c'
}

// ES6写法
let arr = Array.from(obj)
console.log(arr) // []
```

```javascript
let obj = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 2
}

// ES6写法
let arr = Array.from(obj)
console.log(arr) // ['a','b']
```

`Array.from`还可以接收第二个参数,作用类似于数组的`map`方法,用来对每个元素进行处理,将处理后的值放入返回的数组

```javascript
Array.from(arrayLike,x => x*x)
// 等同于
Array.from(arrayLike).map(x => x*x)

Array.from([1,2,3],x => x*x) // [1,4,9]
```

如果`map`函数里用到了`this`关键字,还可以传入`Array.from`第三个参数,用来绑定`this`