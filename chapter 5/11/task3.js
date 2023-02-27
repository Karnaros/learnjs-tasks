function getLocalDay(date){
    let localDay = date.getDay();
    
    if(localDay == 0) localDay = 7;
    
    return localDay;
}

let date = new Date(2012, 0, 3);
console.log( getLocalDay(date) );