const button = document.querySelector("button");
button.addEventListener("click", rollDice);


function rollDice(){
    const randomNumber1 = document.createElement("p");
    const randomNumber2 = document.createElement("p");
    randomNumber1.textContent = Math.floor(Math.random() * 6) + 1;
    randomNumber2.textContent = Math.floor(Math.random() * 6) + 1;

    document.body.appendChild(randomNumber1);
    document.body.appendChild(randomNumber2);
}


