function makeCounter() {

    function counter() {
      return counter.count++;
    };

    counter.set = function(value){
        counter.count = value;
    }
  
    counter.decrease = function(){
        counter.count--;
    }

    counter.set(0);
  
    return counter;
} 

let counter = makeCounter();
console.log( counter() );
console.log( counter.count );
counter.set(10);
console.log( counter.count );
counter.decrease();
console.log( counter.count );