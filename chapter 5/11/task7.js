function getSecondsToTomorrow(){
    let tomorrow = new Date();
    tomorrow.setHours(24, 0, 0, 0);

    return Math.round((tomorrow.getTime() - Date.now())/1000);
}

console.log( getSecondsToTomorrow() );