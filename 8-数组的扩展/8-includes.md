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