// real指的是node交互式解释器，
// 1、在终端输入node，回车，即进入node交互式解释器，

// 2、输入 .editor,进入编辑模式 （<ctrl>-D 完成， <ctrl>-C 取消）
function welcome(name) {
  return `你好 ${name}！`;
}

welcome('Node.js 用户');

// 3、交互式解释器支持解析js、访问node.js核心模块

// 4、默认的解释器会把最近一次解释的表达式的结果赋值给变量 _ （下划线）
// 可输入如下测试
[ 'a', 'b', 'c' ]
> _.length
3

// 5、支持await 关键词

// 6、repl.REPLServer 的实例是使用 repl.start() 方法创建的，不能直接地使用 JavaScript 的 new 关键字创建。
// 包含很多事件，具体见文档