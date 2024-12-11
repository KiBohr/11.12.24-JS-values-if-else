function ageCheck() {
    const UserInput = document.querySelector("#age").valueAsNumber;

    let result = document.querySelector(".result")

    if( UserInput >=18){
        result.innerHTML = `<p>You are 18 or older.</p>`;
    } else {
        result.innerHTML = `<p> You are underage. Big No No.</p>`;
    }
}