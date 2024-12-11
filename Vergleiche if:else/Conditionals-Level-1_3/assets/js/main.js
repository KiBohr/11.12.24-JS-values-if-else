function ageCheck() {
    event.preventDefault();

    const UserInput = document.querySelector("#age").valueAsNumber;

    let result = document.querySelector(".result")

    if( UserInput >=18){
        result.innerHTML = `<p>You are old enough.</p>`;
    } else {
        result.innerHTML = `<p> You are underage. Big No No.</p>`;
    }
}