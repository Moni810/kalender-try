//informationen sammeln
let heute = new Date();
let monat = heute.getMonth();
let jahr = heute.getFullYear();
let wochenTag = heute.getDay();
let displayedDay = heute.getDate();
let displayedMonth = heute.getMonth();
const monate = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
let monatString = monate[displayedMonth];
let aktuellesDatum = `${displayedDay}.${monat +1}.${jahr}`;
//let startTag =
//let endTag = 

//überschriften
document.getElementById("überschrift").innerText = aktuellesDatum;
document.getElementById("überschrift2").innerText = monatString;

let startWochentag = new Date (jahr, monat, 1).getDay();
let letzterWochentag = new Date (jahr, monat +1, 0).getDay();


function drawCalendar (){
    let aktuellerTag = heute.getDate();
    let aktuellerMonat = heute.getMonth();
    let aktuellesJahr = heute.getFullYear();
    let startWochentag = new Date (jahr, monat, 1).getDay();
    let letzterWochentag = new Date (jahr, monat +1, 0).getDay();
    
    let tageVorherBeginnen = startWochentag == 0 ? 6 : startWochentag -1;
    let startTag = new Date(jahr, monat, 1- tageVorherBeginnen);
    console.log(startTag);
    let tageNachEnde = letzterWochentag == 0 ? 0 : 7 - letzterWochentag;
    console.log(letzterWochentag);
}
drawCalendar();