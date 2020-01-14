var path = require("path");
var fs = require("fs");
var xlsx = require('node-xlsx');

// 读取文件名
// var pathName = "../demo/data";
// fs.readdir(pathName, function(err, files){
//     var dirs = [];
//     (function iterator(i){
//       if(i == files.length) {
//         // 读出所有文件的文件名
//         console.log(dirs);
//         console.log('files', files);
//         return ;
//       }
//       fs.stat(path.join(pathName, files[i]), function(err, data){     
//         if(data.isFile()){               
//             dirs.push(files[i]);
//         }
//         iterator(i+1);
//        });   
//     })(0);
// });

// 解析得到文档中的所有 sheet
var sheets = xlsx.parse('./data/刘诗琴-述职反馈-202014.xlsx');
// 遍历 sheet
sheets.forEach(function(sheet){
  console.log(sheet['name']);
  let data1 = [['提交人','提交时间','反馈建议','演讲内容','语言表达','综合印象','PPT效果', '平均得分']];
  // 读取每行内容
  for(var rowId in sheet['data']){
      console.log('第几行的数据', rowId);
      var row=sheet['data'][rowId];
      console.log('数据为：', row);
      // var newrow = [];
      var aver = 0;
      var sum = 0;
      for(var i = 3; i < row.length ; i++) {
        sum += +row[i];
      }
      aver = sum/4;
      row.push(aver);
      console.log('平均后的row', row);
      if (rowId !== '0') {
        data1.push(row + '');
      }
  }
  console.log('组合', data1);
});