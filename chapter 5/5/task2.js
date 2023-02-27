function filterRange(arr, a, b){
    return arr.filter(num => (num >= a && num <= b));
}

let arr = [5, 3, 8, 1];
console.log( filterRange(arr, 1, 4).toString() );
console.log( arr.toString() );