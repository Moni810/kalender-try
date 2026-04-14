//informationen sammeln
let aktuellerTag = new Date();
let monat = aktuellerTag.getMonth();
let jahr = aktuellerTag.getFullYear();
let wochenTag = aktuellerTag.getDay();
const monate = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]; 

//TODO Datum nach innterText dynamisch machen
document.getElementById("überschrift").innerText = "14.04.2026";
console.log(überschrift)
//TODO Monat auf einen monat ausgeschrieben beziehen. ist derzeit 3
document.getElementById("überschrift2").innerText = (monat)