### Number.isInteger()
`Number.isInteger()`用来判断一个值是否为整数.需要注意的是,在JS内部,整数和浮点数是同样的储存方法,所以3和3.0被视为一个值

```javascript
Number.isInteger(15) // true
Number.isInteger(15.0) // true
Number.isInteger(15.1) // false
Number.isInteger('15') // false
Number.isInteger(true) // false
```

ES5可以通过下面代码部署`Number.isInteger`方法

```javascript
;(function(){
    var floor = Math.floor,
        isFinite = global.isFinite

    Object.defineProperty(Number,'isInteger',{
        value: function isInteger(value){
            return typeof value === 'number' && isFinite(value) && value > -9007199254740992 && value < 9007199254740992 && floor(value) === value
        },
        configurable: true,
        enumerable: false,
        writable: true
    })
})(this)
```