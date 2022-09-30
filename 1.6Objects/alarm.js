let alarm = {
    weekendAlarm : "no alarm needed",
    weekdayAlarm : "get up at 7am"
}

let day = "Monday"
let currentAlarm
if (["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].find((element) => element==day))
{
    currentAlarm = alarm.weekdayAlarm;
    
}
else{
    currentAlarm = alarm.weekdayAlarm;
    
}
console.log(currentAlarm)


