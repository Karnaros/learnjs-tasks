function shuffle(array){
    for(let i = 0; i < array.length; i++){
        let randomIndex = Math.floor(Math.random() * (array.length - i) + i);
        let randomItem = array[randomIndex];

        array[randomIndex] = array[i];
        array[i] = randomItem;
    }
}

let arr = [1, 2, 3];

let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};
  
for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
}
  
for (let key in count) {
    console.log(`${key}: ${count[key]}`);
}