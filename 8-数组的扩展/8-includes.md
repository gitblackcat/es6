### 数组实例的includes()
`Array.prototype.includes`方法返回一个布尔值,表示某个数组是否包含给定的值,与字符串的`includes`方法类似

```javascript
[1, 2, 3].includes(2)     // true
[1, 2, 3].includes(4)     // false
[1, 2, NaN].includes(NaN) // true
```

该方法的第二个参数表示搜索的起始位置,默认为`0`.如果第二个参数为负数,则表示从后往前数的位置(`-1`就是最后面一位),如果这时它大于数组长度(比如第二个参数为`-4`,但数组长度为`3`),则会重置为从`0`开始

```javascript
[1, 2, 3].includes(3, 3)  // false
[1, 2, 3].includes(3, -1) // true
```

没有该方法之前,我们通常使用数组的`indexOf`方法,检查是否包含某个值

```javascript
if (arr.indexOf(el) !== -1) {
  // ...
}
```

`indexOf`方法有两个缺点,一是不够语义化,它的含义是找到参数值的第一个出现位置,所以要去比较是否不等于`-1`,表达起来不够直观。二是,它内部使用严格相等运算符(===)进行判断,这会导致对`NaN`的误判

```javascript
[NaN].indexOf(NaN)
// -1
```

下面代码用来检查当前环境是否支持该方法,如果不支持,部署一个简易的替代版本

```javascript
const contains = (() =>
  Array.prototype.includes
    ? (arr, value) => arr.includes(value)
    : (arr, value) => arr.some(el => el === value)
)();
contains(['foo', 'bar'], 'baz'); // => false
```