function getSecondsToday(){
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    return Math.round((Date.now() - today.getTime())/1000);
}

console.log( getSecondsToday() );