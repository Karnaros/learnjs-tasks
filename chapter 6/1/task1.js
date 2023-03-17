function sumToLoop(n){
    let result = 0;
    for(i = 1; i <= n; i++){
        result += i;
    }
    return result;
}

function sumToRecursive(n){
    return (n == 1) ? n : n + sumToRecursive(n-1);    
}

function sumToFormula(n){
    return (1 + n)*n/2;
}

console.log( sumToFormula(100) );