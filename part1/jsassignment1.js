function arraySum(array) {
    let sum;
    for (var number in array) {
        sum += number;
    }
    return sum;
}
console.log(arraySum([5, 5, 1, 3]));
