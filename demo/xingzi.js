// 此脚本用于帮杏子统计计息证明，生成新文件
var path = require("path");
var fs = require("fs");
var xlsx = require('node-xlsx');
// 读取excel文件
var tiexi = xlsx.parse('./data/123.xlsx');

// 遍历sheet
tiexi.forEach(function(sheet){
  // 读取每行内容
  for(var rowId in sheet['data']){
    var row = sheet['data'][rowId];
    if (+rowId >1) {
      handleData(row);
    }
  }
});
// 处理row数据
function handleData (row) {
  // 提取数据
  var num = row[0];
  var name = row[1];
  var id = row[2];
  var rmb = row[3];
  const start = '2019-12-01'
  const end = '2020-02-29'
  var tips = row[8];
  var money = row[9].toFixed(2);
  // 建立文件
  var blank = xlsx.parse('./data/blank.xlsx');
    // 遍历sheet
  blank.forEach(function(sheet){
    var blankdata = sheet['data'];
    blankdata[2] = [ '贷款人姓名：', name, '　', '住址：', '山门镇', '　', '　' ];
    blankdata[4] = [ num, id, rmb, start, end, tips, money ];
    blankdata[7] = [ '合计', '　', '　', '　', '　', '　', money ];
    const data = [{
      name: '计息证明',
      data: blankdata
    }]
    const res = xlsx.build(data)
    fs.writeFile(`./xingzi/${name}-${num}-计息证明.xlsx`, res, err => {
        if (err) throw err;
        console.log(`${name}-文件已保存`);
    })
  });
};
