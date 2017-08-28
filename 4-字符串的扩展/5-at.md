### at
ES5 对字符串对象提供`charAt`方法，返回字符串给定位置的字符。该方法不能识别码点大于`0xFFFF`的字符

```javascript
'abc'.charAt(0) // "a"
'𠮷'.charAt(0) // "\uD842"
```

上面代码中，charAt方法返回的是UTF-16编码的第一个字节，实际上是无法显示的

ES7为字符串实例提供了`at`方法,可识别`Unicode`编号大于`0xFFFF`的字符,返回正确的字符.

这个方法可以通过[垫片](https://github.com/es-shims/String.prototype.at)库实现