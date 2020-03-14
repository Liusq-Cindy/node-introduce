const fs = require('fs');
const xlsx = require('node-xlsx');

const data = [{
    name: 'Sheet1',
    data: [
        ['姓名','年龄','性别'],
        ['张三','18','男'],
        ['小明','20','男']
    ]
}, {
    name: 'Sheet2',
    data: [
        ['学科','成绩'],
        ['语文','80'],
        ['数学','90']
    ]
}]

const res = xlsx.build(data)

fs.writeFile('demo.xlsx', res, err => {
    if (err) throw err;
    console.log('文件已被保存');
})