type ArrayValues = {
    sum: number;
    count: number;
}

function calcArray(arr: number[]): ArrayValues {

    let sum: number = 0;
    let count: number = 0;

    for (let a of arr){
        sum += a;
        count++;
    }

    return {
        sum,
        count
    };
}


const arrayNumbers: number[] = [1, 5, 5, 5, 6];
const test = calcArray(arrayNumbers);
console.log(`Sum: ${test.sum} & count: ${test.count}`);