### Number.isFinite()/Number.isNaN()
ES6在`Number`对象上新提供了`Number.isFinite()`和`Number.isNaN()`两个方法,用来检查`Infinite`和`NaN`这两个特殊值

与传统全局的`isFinite()`和`isNaN()`方法区别在于,传统方法先调用`Number()`方法将非数值转为数值,再进行判断,而新方法只对数值有效,对于非数值一律返回`false`

```javascript
//Number.isFinite()用来检测一个数值是否非无穷(有限finite)
Number.isFinite(15) // true
Number.isFinite(0.8) // true
Number.isFinite(NaN) // false
Number.isFinite(Infinity) // false
Number.isFinite(-Infinity) // false
Number.isFinite('foo') // false
Number.isFinite('15') // false
Number.isFinite(true) // false
```

ES5可以通过下面代码部署`Number.isFinite`方法

```javascript
;(function(){
    var global_isFinite = global.isFinite

    Object.defineProperty(Number,'isFinite',{
        value: function isFinite(value){
            return typeof value === 'number' && global_isFinite(value)
        },
        configurable: true,
        enumerable: false,
        writable: true
    })
})(this)
```

```javascript
//Number.isNaN()用来检测一个值是否为NaN
Number.isNaN(NaN) // true
Number.isNaN(15) // false
Number.isNaN('15') // false
Number.isNaN(true) // false
Number.isNaN(9/NaN) // true
Number.isNaN('true'/0) // true
Number.isNaN('true'/'true') // true
```

ES5可以通过下面代码部署`Number.isNaN`方法

```javascript
;(function(){
    var global_isNaN = global.isNaN

    Object.defineProperty(Number,'isNaN',{
        value: function isNaN(value){
            return typeof value === 'number' && global_isNaN(value)
        },
        configurable: true,
        enumerable: false,
        writable: true
    })
})(this)
```