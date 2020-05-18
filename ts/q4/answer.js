var arr = [1, 2, 3, 4];
var allarr = [];
// 临时变量，存数组
var temp = [];
async function getAllList(arr) {
    for (var i = 0; i < arr.length; i++) {
        // 插入第i个值
        temp.push(arr[i]);
        // 复制数组
        var copy = arr.slice();
        // 删除复制数组中的第i个值，用于递归
        copy.splice(i, 1);
        if(copy.length == 0) {
            // console.log(temp);
            allarr= [...allarr, [...temp]]
        }else {
            // 否则进行递归
            getAllList(copy);
        }
        // 递归完了之后删除最后一个元素，保证下一次插入的时候没有上一次的元素
        temp.pop();
    }
}
// 获取4位数的所有计算结果
var allMaybe = []
function getAllAnswer(arr) {
    allMaybe.push(arr[0]+arr[1]+arr[2]+arr[3])
    return allMaybe
}
var answer = 0;
getAllList(arr).then(() => {
    // console.log('allarr', allarr)
    for (var j = 0; j < allarr.length; j++) {
        console.log('allarrallarrallarr', allarr[j])
        const alladd = getAllAnswer(allarr[j]);
        console.log('alladd', alladd)
    }
});