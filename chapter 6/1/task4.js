let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

function printListLoop(list){
    let current = list;

    while (current != null) {
        console.log(current.value);
        current = current.next;
    }
}

function printListRecursive(list){
    console.log(list.value);
    
    if(list.next != null){
        printListRecursive(list.next);
    }
}

printListLoop(list);
console.log('');
printListRecursive(list);