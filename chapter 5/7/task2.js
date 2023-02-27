function aclean(arr){
    let map = new Map();

    for(let word of arr){
        let key = Array.from(word.toLowerCase()).sort().join('');
        map.set(key, word);
    }

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr).toString() );