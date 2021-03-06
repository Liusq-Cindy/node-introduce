// 此脚本用于计算data文件夹下所有excel文件中述职数据的平均值
var path = require("path");
var fs = require("fs");
var xlsx = require('node-xlsx');

// 1、读取文件夹目录下的文件名
var pathName = "../demo/data";
fs.readdir(pathName, function(err, files){
    files.forEach((item, index) => {
      formatDate(item);
    })
});
function formatDate(item){
  // 解析得到文档中的所有 sheet
  var sheets = xlsx.parse(`./data/${item}`);
  // console.log('sd', sheets);
  // 遍历 sheet
  sheets.forEach(function(sheet){
    console.log('s',sheet['data'])
    // 读取每行内容,计算除表头外每一行的平均值
    // for(var rowId in sheet['data']){
    //     var row=sheet['data'][rowId];
    //     var aver = 0;
    //     var sum = 0;
    //     for(var i = 2; i < row.length-1 ; i++) {
    //       sum += +row[i];
    //     }
    //     aver = sum/4;
    //     row.push(aver + '');
    // }
    const data = [{
      name: '计息证明',
      data: sheet['data']
    }]
    const res = xlsx.build(data)
    fs.writeFile(`./cal/计算后-${item}`, res, err => {
        if (err) throw err;
        console.log(`${item}-文件已保存`);
    })
  });
};