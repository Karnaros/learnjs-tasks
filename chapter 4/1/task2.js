function isEmpty(obj){
    for(let property in obj){
        return false;
    }
    return true;
}
//console.log( isEmpty({}) );
//console.log( isEmpty({property: "property"}) );