### 安全整数和Number.isSafeInteger()
JS能够准确表示的整数范围在`-2^{53}`到`2^{53}`之间(不含两个端点),超过这个范围就无法精确表示

`Math.pow(2,53) // 9007199254740992`

`9007199254740992 // 9007199254740992`

`9007199254740993 // 9007199254740992`

```javascript
Math.pow(2,53) === Math.pow(2,53) + 1 
// true
```

ES6引入了`Number.MAX_SAFE_INTEGER(9007199254740991)`和`Number.MIN_SAFE_INTEGER(-9007199254740991)`两个常量,用来表示这个范围的上下线

#### Number.isSafeInteger()
`Number.isSafeInteger()`用来判断一个整数是否落在这个范围内

```javascript
Number.isSafeInteger('a') // false
Number.isSafeInteger(null) // false
Number.isSafeInteger(NaN) // false
Number.isSafeInteger(Infinity) // false
Number.isSafeInteger(-Infinity) // false

Number.isSafeInteger(3) // true
Number.isSafeInteger(1.2) // false
Number.isSafeInteger(9007199254740990) // true
Number.isSafeInteger(9007199254740992) // false

Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1) // false
Number.isSafeInteger(Number.MIN_SAFE_INTEGER) // true
Number.isSafeInteger(Number.MAX_SAFE_INTEGER) // true
Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1) // false
```

**_注意,验证运算结果是否落在安全整数的范围内,不能只验证运算结果,而要同时验证参与运算的每个值_**

```javascript
Number.isSafeInteger(9007199254740993)
// false
Number.isSafeInteger(990)
// true
Number.isSafeInteger(9007199254740993 - 990)
// true

// 9007199254740993 - 990
// 返回结果是9007199254740002
// 正确结果是9007199254740003
```