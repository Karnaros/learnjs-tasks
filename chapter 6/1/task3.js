function fib(n){
    if(n == 0) return 0;
    let previous = 1;
    let current = 1;  
    for(i = 3; i <= n; i++){
        let next = previous + current;
        previous = current;
        current = next;
    }
    return current;
}

console.log( fib(3) );
console.log( fib(7) );
console.log( fib(77) );