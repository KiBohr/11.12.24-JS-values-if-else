// : FN, die wert aus dem input-feld mit 2 multipliziert + Ergebnis in html ausgeben

console.log(`hallo`);

function double() {
    const userNumber = Number(document.querySelector("input").value);
    console.log(userNumber);

    const button = document.querySelector("button");

    const Ergebnis = document.querySelector("p");

    let SuperErgebnis = userNumber * 2;

    Ergebnis.innerHTML = SuperErgebnis;
}

