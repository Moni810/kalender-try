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
let selectedTag = heute;

function istTagGleich(tagA, tagB) {
    if (tagA.getDate() != tagB.getDate()) return false;
    if (tagA.getMonth () != tagB.getMonth()) return false;
    if (tagA.getFullYear () != tagB.getFullYear()) return false;
    return true;
}
//let startTag =

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
    let endTag = new Date(aktuellesJahr, aktuellerMonat +1, tageNachEnde);
    const tbody = document.getElementById("kalenderblatt");
    let wochenZeile;
    for (let t = startTag; t <= endTag; t = new Date(t.getFullYear(), t.getMonth(), t.getDate() +1)){
        //console.log(t);
        if (t.getDay() == 1) {
            wochenZeile = document.createElement("td");
        }
        let tagZelle = document.createElement("td");
        tagZelle.innerText = t.getDate();

        //Sonderregeln
        if (istTagGleich(t, heute)) {
            tagZelle.classList.add("heute");
        }
        if (istTagGleich(t, selectedTag)) {
            tagZelle.classList.add("selected");
        }
        if (t.getDay() == 6) {
            tagZelle.classList.add("sa");
        }
        if (t.getDay() == 0) {
            tagZelle.classList.add("so");
        }

        //Click-Handler
        tagZelle.onclick = () => {
            clickDatum(t);
        }

        wochenZeile.appendChild(tagZelle); 
        if (t.getDay() == 0) {
            t.tbody.appendChild(wochenZeile);
        }

    }
}
drawCalendar();
