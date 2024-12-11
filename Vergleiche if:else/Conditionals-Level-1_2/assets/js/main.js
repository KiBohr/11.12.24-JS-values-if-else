
function weather(){
    const UserInput = document.querySelector(".user-input").valueAsNumber;

    const result = document.querySelector(".w-result");

    if(UserInput >=8){
        result.innerHTML = `The weather is super.`;
    } else if(UserInput >= 6 && UserInput <= 7) {
        result.innerHTML = `The weather is good.`;
    } else if(UserInput >= 3 && UserInput <=5) {
        result.innerHTML = `The weather is ok.`;
    } else {
        result.innerHTML = `The weather is bad.`;
    }
}