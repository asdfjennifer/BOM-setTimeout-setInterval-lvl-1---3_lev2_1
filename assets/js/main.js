// Übung lev2_1: BOM Meldung

// Schreibe eine Funktion die beim Start, die Zahlen runter zählt.
// Schau Dir die Ergebnisvorschau an.

// Der HTML und CSS Code befindet sich im Kommentar.
//     Nutze
// window.onload
// setInterval()
// clearInterval()
// getElementsByClassName() / getElementById()
// if, else if

let count = document.getElementById('count');
let div = document.querySelector('.message'); //da es sich um eine Class handelt, hier den Punkt nicht vergessen
let counter = 10;

let timerId = setInterval(function start() {
    console.log(counter);
    counter--;
    count.innerHTML = counter;
    if (counter === 0) {
        clearInterval(timerId);
        div.remove("myStyle");
    }
}, 1000)