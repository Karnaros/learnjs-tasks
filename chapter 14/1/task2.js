let array = [1, 2, 3];

array = wrapNegativeIndexing(array);

console.log(array[-1]);
console.log(array[-2]);
console.log(array[-3]);

function wrapNegativeIndexing(target) {
    return new Proxy(target, {
        get(target, prop, receiver){
            let numProp = Number(prop);

            if( Number.isNaN(numProp) ) return Reflect.get(...arguments);
            
            return Reflect.get(target, target.length + numProp, receiver);
        }
    });
}
