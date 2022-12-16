/*
Palidroma
Chiedere all’utente di inserire una parola tramiite un form
Creare una funzione per capire se la parola inserita è palindroma
*/
// * 1. Scriviamo sempre in italiano i passaggi che vogliamo fare.
// * 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

function invertWord(word) {
    word = word.toLowerCase();
    let reversed = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    return reversed;
}

// ! start

const form = document.getElementById("form");
const result = document.getElementById("paste");


let message = "";
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputName = document.getElementById("input").value;
    const finalName = invertWord(inputName);


    if (finalName === inputName) {
        message = finalName;

    } else {
        message = `la parola <u>${inputName}</u> non è Polidroma.`;
    }
    result.classList.remove("d-none")
    result.innerHTML = message;
    return
})

