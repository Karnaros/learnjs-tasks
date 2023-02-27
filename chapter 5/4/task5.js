function getMaxSubSum(arr){
    let resultSum = 0;
    let subSum = 0;

    for(let num of arr){
        subSum += num;
        if(subSum <= 0){
            subSum = 0;
            continue;
        }
        resultSum = Math.max(resultSum, subSum);
    }

    return resultSum;
}

console.log( getMaxSubSum([-1, 2, 3, -9]) );
console.log( getMaxSubSum([2, -1, 2, 3, -9]) );
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) );
console.log( getMaxSubSum([-2, -1, 1, 2]) );
console.log( getMaxSubSum([100, -9, 2, -3, 5]) );
console.log( getMaxSubSum([1, 2, 3]) );