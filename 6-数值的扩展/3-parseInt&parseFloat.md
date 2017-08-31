### Number.parseInt()/Number.parseFloat()
ES6将全局方法`parseInt()`和`parseFloat()`移植到了`Number`对象上,行为完全保持不变

```javascript
//ES5的写法
parseInt('12.34') // 12
parseFloat('123.45#') // 123.45
```

```javascript
//ES6的写法
Number.parseInt('12.34') // 12
Number.parseFloat('123.45#') // 123.45
```

这样做的目的,是逐步减少全局性方法,使语言逐步模块化

```javascript
console.log(Number.parseInt === parseInt) // true
console.log(Number.parseFloat === parseFloat) // true
```