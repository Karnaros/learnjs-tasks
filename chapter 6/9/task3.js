function debounce(func, ms) {
    let onCooldown = false;

    function wrapper(...args){
        if(onCooldown) return undefined;

        onCooldown = true;
        setTimeout( (() => onCooldown = false), ms)
        
        return func.apply(this, args);
        
        
    }

    return wrapper;
}

let f = debounce(console.log, 1000);

f(1);
f(2);

setTimeout( () => f(3), 100);
setTimeout( () => f(4), 1100);
setTimeout( () => f(5), 1500);