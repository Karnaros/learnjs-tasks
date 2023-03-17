function throttle(func, ms) {
    let onCooldown = false;
    let savedThis,
        savedArgs;

    function wrapper(...args){
        if(onCooldown) {
            savedArgs = args;
            savedThis = this;
            return undefined;
        }

        onCooldown = true;
        savedThis = savedArgs = null;

        setTimeout( (function() {
            onCooldown = false;
            if(savedThis){
                wrapper.apply(savedThis, savedArgs);
            }
        }), ms)
        
        return func.apply(this, args);
    }

    return wrapper;
}

function f(a) {
    console.log(a)
  }
  

let f1000 = throttle(f, 1000);
  
f1000(1);
f1000(2);
f1000(3);