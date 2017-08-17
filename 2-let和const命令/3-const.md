### const命令
`const`用来声明常量.一旦声明,其值不可更改

```javascript
const PI = 3.1415
console.log(PI) //3.1415

PI = 3 //Assignment to constant variable.
```

`const`声明不得改变其值,这意味着一旦声明就必须立即初始化,不能留到以后赋值

```javascript
const PI //Missing initializer in const declaration
```

`const`还有一些跟`let`一样的功能

- `const`的作用域与`let`命令相同: 只在声明所在的块级作用域内有效

- `const`命令声明的常量不可提升,存在TDZ

- 与`let`一样,`const`也不可重复声明常量

```javascript
var msg = 'hello'
const name = 'yzd'

//以下两行都会报错
const msg = 'world' //Identifier 'msg' has already been declared
const name = 'zdy' //Identifier 'name' has already been declared
```

#### const对于复合类型变量
对于复合类型的变量,变量名不指向数据,而是指向数据所在的地址.`const`命令只是保证变量名指向的地址不变,并不保证该地址的数据不变

```javascript
const obj = {}
obj.name = 'yzd'
console.log(obj.name)

obj = {name: 'zdy'} //Assignment to constant variable
```

ES5只有两种声明变量的方式: `var`命令和`function`命令.

ES6添加了`let`,`const`,`import`,`class`命令

#### 跨模块常量
上面说,`const`声明的常量只在当前代码块有效.如果想设置跨模块的常量,可以用以下方法

```javascript
// module.js
export const A = 1
export const B = 3
export const C = 5

// index1.js
import * as constants from './module.js'
console.log(constants.A) //1
console.log(constants.B) //3
console.log(constants.C) //5

// index2.js
import {A,B} from './module.js'
console.log(A) //1
console.log(B) //3
```


