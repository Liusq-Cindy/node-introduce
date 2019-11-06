// querystring模块提供用于解析和格式化 URL 查询字符串的实用工具。 它可以使用以下方式访问：
const querystring = require('querystring');
// querystring.parse(str[, sep[, eq[, options]]])
// str <string> 要解析的 URL 查询字符串。
// sep <string> 用于在查询字符串中分隔键值对的子字符串。默认值: '&'。
// eq <string> 用于在查询字符串中分隔键和值的子字符串。默认值: '='。
// options <Object>

// decodeURIComponent <Function> 解码查询字符串中的百分比编码字符时使用的函数。默认值: querystring.unescape()。
// maxKeys <number> 指定要解析的键的最大数量。指定 0 可移除键的计数限制。默认值: 1000。
// querystring.parse() 方法将 URL 查询字符串 str 解析为键值对的集合。


// 解析url查询字符串 也可以是.decode
const a = querystring.parse('foo=bar&abc=xyz&abc=123');
console.log('a', a); // { foo: 'bar', abc: [ 'xyz', '123' ] }

// 序列化为url查询字符串,也可以是.encode
const b = querystring.stringify(a);
console.log('b',b); // foo=bar&abc=xyz&abc=123
