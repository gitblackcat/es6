### let基本用法
ES6新增了`let`命令,用于声明变量.其用法类似于`var`,但是所声明的变量只在`let`命令所在的`代码块内`有效

也就是说我在某个块级作用域用`let`声明了某个变量,那么我只能在当前作用域或者其向下的作用域链中能使用该变量

```javascript
{
    let name = 'yzd'
}
console.log(name) //name is not defined
```

```javascript
;(function(){
    let n = 6

    function printNum(){
        console.log(n)
    }
    printNum()
})()
```

```javascript
var a = []
for(let i=9;i>=0;i--){
    a[i] = function(){
        console.log(i)
    }
}
a[6]() //-1

//上面的代码中,变量是var声明的,在全局范围内都有效.所以每次循环,新的i值都会覆盖旧值,导致最后输出的是最后一轮的i值

var b = []
for(let i=9;i>=0;i--){
    b[i] = function(){
        console.log(i)
    }
}
b[6]() //6

//上面的代码中,变量是let声明的,当前的i值只在本轮循环有效.所以每次循环的i其实都是一个新的变量

//为什么会这样呢?我的看法是每次循环其实是制造了一个新的块级作用域.然后let声明的变量,只能在当前作用域有效
```

#### let不存在变量提升
`let`不像`var`那样会发生`变量提升`现象.所以,变量一定要在声明后使用,否则报错

```javascript
console.log(num) //num is not defined
let num = 5
```

#### 暂时性死区(temporal dead zone,简称TDZ)
只要块级作用域内存在`let`命令,它所声明的`变量`就会"绑定(binding)"这个区域,`该变量`不再受外部的影响

```javascript
var tmp = 123
if(true){
    tmp = 456 //tmp is not defined
    let tmp
}
```

ES6明确规定,如果区块中存在`let`和`const`命令,则该区块对这些命令声明的变量从一开始就形成封闭作用域.只要在声明前使用这些变量,就会报错.

总之,在代码块内,使用`let`命令声明变量之前,该变量都是不可用的.这在语法上就是TDZ

TDZ的本质就是,只要一进入当前作用域,所要使用的变量就已存在,但是不可获取,只有等到声明变量的那一行代码出现,才可以获取和使用该变量

还有一些比较隐蔽的死区现象

```javascript
function eg(x=y,y=2){
    return [x,y]
}

eg() //y is not defined
```

ES6规定暂时性死区和不存在变量提升,主要为了减少运行时错误,防止在变量声明前就使用该变量,从而导致意料之外的行为.

#### 不允许重复声明
`let`不允许在`相同作用域`内重复声明同一个变量

```javascript
let a = 'a'
let a = 'aa' //Identifier 'a' has already been declared
```

```javascript
function f(a){
    let a
}
f(0) //Identifier 'a' has already been declared
```

```javascript
function f(a){
    {
        let a
    }
}
f(0) //不报错
```





