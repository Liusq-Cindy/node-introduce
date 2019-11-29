// module模块导出: 通过 exports 对象把 getjson 作为模块的访问接口，在 main.js 中通过 require('./json') 加载这个模块，然后就可以直接访 问 json.js 中 exports 对象的成员函数了。
exports.getjson = function() {
  return [{
    id: 6,
    user_message: '搜索',
    user_name: 'lsqlsq',
    time: '2019-11-27T02:45:45.000Z',
    user_id: 2 
  }, {
    id: 3,
    user_message: '搜索2',
    user_name: 'lsqlsq22',
    time: '2019-11-27T02:45:45.000Z',
    user_id: 4 
  }];
}