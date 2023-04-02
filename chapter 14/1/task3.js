const handlers = Symbol('handlers');

function makeObservable(target) {
    target[handlers] = [];

    target.observe = function(handler) {
        this[handlers].push(handler);
    }
    return new Proxy(target, {
        set(target, prop, value, receiver){
            let setResult = Reflect.set(...arguments);

            if(setResult){
                for(let handler of target[handlers]){
                    handler(prop, value);
                }
            }
            
            return setResult;
        }
    })
}

let user = {};
user = makeObservable(user);
  
user.observe((key, value) => {
    console.log(`SET ${key}=${value}`);
});
  
user.name = "John";
