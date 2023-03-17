function printNumbersInterval(from, to) {
    let current = from;

    console.log( current++ );

    let interval = setInterval(() => {
        console.log( current++ );

        if(current > to) clearInterval(interval);
    }, 1000);
}

function printNumbersTimer(from, to) {
    let current = from;

    console.log( current );

    let timer = setTimeout(function tick() {
        console.log( ++current );

        if(current < to) setTimeout(tick, 1000);
    }, 1000);
}

printNumbersInterval(5, 10);

printNumbersTimer(5,10);