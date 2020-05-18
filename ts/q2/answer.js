var arr = [2, 2, 2, 3, 3, 3, 1, 1];
function maxCount1(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var keys = arr[i];
        if (obj[keys]) {
            obj[keys]++;
        }
        else {
            obj[keys] = 1;
        }
    }
    var list = [];
    for (var key in obj) {
        if (obj[key] > arr.length / 3) {
            list.push(key);
        }
    }
    return list;
}
console.log(maxCount1(arr));
