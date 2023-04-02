let user = {
    name: "John"
};

user = wrap(user);

console.log(user.name);
console.log(user.age);

function wrap(target) {
    return new Proxy(target, {
        get(target, prop, receiver){
            if(prop in target) return Reflect.get(...arguments);
            
            throw new ReferenceError(`Свойство "${prop}" не существует.`);
        }
    });
}
