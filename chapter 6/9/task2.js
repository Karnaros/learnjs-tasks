function delay(func, ms) {

    function wrapper(...args){
        setTimeout( (() => func.apply(this, args)), ms);
                
    }
    return wrapper;
}

function f(x) {
  console.log(x);
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test1");
f1500("test2");