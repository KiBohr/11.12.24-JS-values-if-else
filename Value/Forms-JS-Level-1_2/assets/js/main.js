
function calcAge() {
    const birthYear = document.querySelector("#birth-year").valueAsNumber;

    // const calcMyAge = document.querySelector("button");

    let calculation = 2024 - birthYear;

    let result = document.querySelector(".result")

    result.innerHTML = `<p> Your age is ${calculation}. </p>`;
}  

console.log(new Date());