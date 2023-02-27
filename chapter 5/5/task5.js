function copySorted(arr){
    return [...arr].sort();
}

let arr = ["HTML", "JavaScript", "CSS"];
console.log( copySorted(arr).toString() );
console.log( arr.toString() );