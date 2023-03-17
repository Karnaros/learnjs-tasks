function sum(arg) {
    let result = arg;

    function func(nextArg){
        result += nextArg;
        return func;
    }
    func.valueOf = function(){
        return result;
    }

    return func;
}

console.log( sum(0)(1)(2)(3)(4)(5).valueOf() );