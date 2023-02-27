function getWeekDay(date){
    return ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"][date.getDay()];
}

let date = new Date(2012, 0, 3);
console.log( getWeekDay(date) );