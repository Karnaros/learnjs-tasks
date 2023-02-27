let upperLimit = 10;

primeLabel:
for(let i = 2; i <= upperLimit; i++){
    for(let j = 2; j < i; j++){
        if(!Boolean(i % j)) continue primeLabel;
    }
    console.log(i);
}