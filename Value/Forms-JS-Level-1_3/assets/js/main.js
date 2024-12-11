
function calcDif(){
    const UserInput1 = Number(document.querySelector("#age1").value);

    const UserInput2 = Number(document.querySelector("#age2").value);

    let calc = UserInput1 - UserInput2;

    let result = document.querySelector(".result");

    result.innerHTML = `<p>The difference is ${calc}.</p>`;
}

