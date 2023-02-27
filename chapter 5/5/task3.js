function filterRangeInPlace(arr, a, b){
    let i = 0;
    while(i in arr){
        if((arr[i] < a || arr[i] > b)){
            arr.splice(i, 1);
            continue;
        }
        i++;
    }
}

let arr = [5, 3, 8, 1];
console.log( filterRangeInPlace(arr, 1, 4) );
console.log( arr.toString() );