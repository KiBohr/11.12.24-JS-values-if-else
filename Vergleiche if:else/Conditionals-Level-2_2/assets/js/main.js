
function checkAirQuality(){
    event.preventDefault();

    const airQualityInput = document.querySelector("#range").valueAsNumber;

    const airQualityOutput = document.querySelector(".air-quality-output");

    airQualityOutput.innerHTML = `<p>=${airQualityInput} </p>`;

    const backGround = document.querySelector("body");

    const healthConcern = document.querySelector(".health-concern");

    if (airQualityInput <= 50 ){
        backGround.style.backgroundColor = "green";

        healthConcern.innerHTML += `<p>Level of health concern: Good<p/>`;

        healthConcern.innerHTML += `<p>Level of health effect: Little to no risk<p/>`;
        
    } else if(airQualityInput >= 50 && airQualityInput <= 100) {
        backGround.style.backgroundColor = "yellow";

        healthConcern.innerHTML += `<p>Level of health concern: Moderate<p/>`;

        healthConcern.innerHTML += `<p>Level of health effect: Acceptable Quality<p/>`;
    } else{
        backGround.style.backgroundColor = "orange";

        healthConcern.innerHTML += `<p>Level of health concern: Unhealthy for sensitive groups<p/>`;

        healthConcern.innerHTML += `<p>Level of health effect: Generable publics not likely affected<p/>`;
    }
}