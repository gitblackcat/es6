### Math对象的扩展
ES6在Math对象上新增了17个与数学相关的方法.所有这些方法都是静态方法,只能在Math对象上调用

#### Math.trunc()
`Math.trunc`方法用于去除一个数的小数部分,返回整数部分

```javascript
Math.trunc(4.1) // 4
Math.trunc(4.9) // 4
Math.trunc(-4.1) // -4
Math.trunc(-4.9) // -4
Math.trunc(-0.1234) // -0
```

对于非数值,`Math.trunc`内部使用`Number`方法将其先转为数值

`Math.trunc('12.12') // 12`

对于空值和无法截取整数的值,返回`NaN`

```javascript
Math.trunc(NaN) // NaN
Math.trunc('foo') // NaN
Math.trunc() // NaN
```

#### Math.sign()
`Math.sign`方法用于判断一个数到底是正数,负数,还是零.对于非数值,`Math.sign`方法内部也是先使用`Number`方法将其转为数值

返回5种结果

- 参数为正数,返回`+1`

- 参数为负数,返回`-1`

- 参数为0,返回`0`

- 参数为-1,返回`-0`

- 其他值,返回`NaN`

#### Math.cbrt()
`Math.cbrt`方法用于计算一个数的立方根,对于非数值,`Math.cbrt`方法内部也是先使用`Number`方法将其转为数值

#### Math.hypot()
`Math.hypot`方法返回所有参数的平方和的平方根.对于非数值,`Math.hypot`方法内部也是先使用`Number`方法将其转为数值

```javascript
Math.hypot(3,4) // 5
Math.hypot() // 0
Math.hypot(NaN) // NaN
Math.hypot(3,4,'foo') // NaN
Math,hppot(3,'4') // 5
```