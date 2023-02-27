function ucFirst(str){
    return Boolean(str) ? (str[0].toUpperCase() + str.slice(1)) : str;
}

console.log( ucFirst("вася") );