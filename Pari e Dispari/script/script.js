/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramiite un form.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/
//Consigli del giorno
// * 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// * 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

//! FUNCTIONS
function getRandom(min, max) {
    const random = Math.floor(Math.random() * (max + 1 - min)) + min;
    return random;
}
function isEven(number) {
    if (isNaN(number)) {
        alert("non hai inserito un numero");
        return;
    }
    let result = number % 2 === 0 ? "even" : "odd";
    return result;
}



// ! start
const form = document.getElementById("form");
// const odd = document.getElementById("odd").value;
// const even = document.getElementById("even").value;
const userInput = parseInt(document.getElementById("user").value);
const paste = document.getElementById("target");
const winner = document.getElementById("message");

let total = 0;
let message = "";
//! button click
form.addEventListener("submit", function (event) {

    event.preventDefault();
    const userChoice = document.querySelector('input[type=radio]:checked').value;


    //genero numero per cpu
    const cpuNumber = getRandom(1, 5);

    //sommo i numeri
    total += (cpuNumber + userInput);

    if (isEven(total) === userChoice) {
        message += "ha vinto user";
    } else {
        message += "ha vinto cpu";
    }

    paste.innerText = total;
    winner.innerText = message;
})

