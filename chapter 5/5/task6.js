function Calculator(){
    this.calculate = function(str) {
        let split = str.split(' ');
        let arg1 = Number(split[0]);
        let arg2 = Number(split[2]);
        let operator = split[1];        

        if(operator in this.operations) return this.operations[operator](arg1, arg2);
        return NaN;
    };
    this.operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    }
    this.addMethod = (name, func) => {this.operations[name] = func};
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log( powerCalc.calculate("3 + 7") );
console.log( powerCalc.calculate("2 ** 3") );