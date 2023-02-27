function topSalary(salaries){
    let [keyForMax, maxValue] = [null, 0];
    for(let [key, value] of Object.entries(salaries)){
        if(value > maxValue) [keyForMax, maxValue] = [key, value];
    }

    return keyForMax;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

console.log(topSalary(salaries));
console.log(topSalary({}));