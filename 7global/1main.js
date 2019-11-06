// 以下变量虽然看起来是全局的，但其实并不是。 它们仅存在于模块范围内
// 1  _filename 文件路径及名称
console.log('__filename', __filename)
// 2   __dirname 的值  文件路径
console.log( '__dirname', __dirname );
// 3、 exports
// 4、 module
// 5、 require()