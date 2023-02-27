function unique(arr){
    return arr.filter((item, index, array) => index == array.lastIndexOf(item));
}
 
let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];
  
console.log( unique(strings).toString() );