// 此脚本用于汇总所有成员的总平均值数
var path = require("path");
var fs = require("fs");
var xlsx = require('node-xlsx');

// 1、读取文件夹目录下的文件名
var pathName = "../demo/cal";
fs.readdir(pathName, function(err, files){
    let allmember = [];
    console.log('files',files);
    files.forEach((item, index) => {
      // 解析得到文档中的所有 sheet
      var sheets = xlsx.parse(`./cal/${item}`);
      console.log('sheets', sheets);
      if (sheets[1]) {
        allmember.push(sheets[1].data);
      }
    })
    const data = [{
        name: '所有成员评分汇总',
        data: allmember
    }]
    const res = xlsx.build(data)
    fs.writeFile('所有成员评分汇总.xlsx', res, err => {
        if (err) throw err;
        console.log('所有成员评分汇总-文件已被保存');
    })
});