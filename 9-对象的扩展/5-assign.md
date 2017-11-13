### Object.assign()
#### 基本用法
`Object.assign`方法用于对象的合并，将源对象(`source`)的所有可枚举属性，复制到目标对象(`target`)

```javascript
const target = { a: 1 }

const source1 = { b: 2 }
const source2 = { c: 3 }

Object.assign(target, source1, source2)
target // {a:1, b:2, c:3}
```

`Object.assign`方法的第一个参数是目标对象，后面的参数都是源对象

注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性

```javascript
const target = { a: 1, b: 1 }

const source1 = { b: 2, c: 2 }
const source2 = { c: 3 }

Object.assign(target, source1, source2)
target // {a:1, b:2, c:3}
```

如果只有一个参数，`Object.assign`会直接返回该参数

```javascript
const obj = {a: 1}
Object.assign(obj) === obj // true
```

如果该参数不是对象，则会先转成对象，然后返回

`typeof Object.assign(2) // "object"`

由于`undefined`和`null`无法转成对象，所以如果它们作为参数，就会报错

```javascript
Object.assign(undefined) // 报错
Object.assign(null) // 报错
```