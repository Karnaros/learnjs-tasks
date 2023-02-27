function formatDate(date){
    let timeSinceDate = Date.now() - date.getTime();

    if(timeSinceDate < 1000) return "прямо сейчас";
    if(timeSinceDate < (60 * 1000)) return `${Math.floor(timeSinceDate/(1000))} сек. назад`;
    if(timeSinceDate < (60 * 60 * 1000)) return `${Math.floor(timeSinceDate/(60 * 1000))} мин. назад`;
    
    let years = date.getFullYear().toString().slice(-2);
    let months = twoDigitFormat(date.getMonth() + 1);
    let days = twoDigitFormat(date.getDate());
    let hours = twoDigitFormat(date.getHours());
    let minutes = twoDigitFormat(date.getMinutes());
    
    return `${days}.${months}.${years} ${hours}:${minutes}`;

    function twoDigitFormat(num){
        return ((num < 10) ? '0' : '') + num;
    };
}

console.log( formatDate(new Date(new Date - 1)) );
console.log( formatDate(new Date(new Date - 30 * 1000)) );
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) );
console.log( formatDate(new Date(new Date - 86400 * 1000)) );