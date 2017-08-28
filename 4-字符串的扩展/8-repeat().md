### repeat(n)
`repeat(n)`方法返回一个新字符串,表示将原字符串重复n次

```javascript
let s = 's',
    dblS = s.repeat(2)

console.log(s,dblS) // s ss
```

**_如果`n`是大于0,且是有小数的数,则`n`向下取整_**

**_如果`n`在0到-1之间(不包括-1),则n为0_**

除了上述情况,n取其他数值都报错(包括`Infinity`)

**_`n`为NaN等同于0_**

`'na'.repeat(NaN) // ''`

如果`repeat`的参数是字符串,则会先转换成数字

```javascript
'na'.repeat('aaa') // ''
'na'.repeat('3') // 'nanana'
```