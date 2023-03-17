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

function printReverseListLoop(list){
    let current = list;
    let arr = [];

    while (current != null) {
        arr.push(current.value);
        current = current.next;
    }

    for(let i = (arr.length - 1); i >= 0; i--){
        console.log(  arr[i] );
    }
}

function printReverseListRecursive(list){
    if(list.next != null){
        printReverseListRecursive(list.next);
    }

    console.log(list.value);
}

printReverseListLoop(list);
console.log('');
printReverseListRecursive(list);