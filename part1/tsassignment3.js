function calcArray(arr) {
    //Calculate the sum & count here
    var sum = 0;
    var count = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var a = arr_1[_i];
        sum += a;
        count++;
    }
    return {
        sum: sum,
        count: count
    };
}
var arrayNumbers = [1, 5, 5, 5, 6];
var test = calcArray(arrayNumbers);
console.log("Sum: ".concat(test.sum, " & count: ").concat(test.count));
