### Number.EPSILON
ES6在`Number`对象上新增了一个极小的常量`Number.EPSILON`

```javascript
Number.EPSILON // 2.220446049250313e-16
```

引入一个这么小的常量,目的在于为浮点数计算设置一个误差范围.

```javascript
0.1 + 0.2 // 0.30000000000000004
```

但如果这个误差能够小于`Number.EPSILON`,我们就可以认为得到了正确的结果

因此,`Number.EPSILON`的实质是一个可以接受的误差范围

下面代码为浮点数运算部署了一个误差检查函数

```javascript
function withinErrorMargin(left,right){
    return Math.abs(left - right) < Number.EPSILON
}

withinErrorMargin(0.1+0.2,0.3) // true
withinErrorMargin(0.2+0.2,0.3) // false
```