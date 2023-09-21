let randomNumber;
let guessingState = 0;

function generateNumber() {
    randomNumber = Math.floor(Math.random() * 100);
}

function guessNumber() {
    let numberValue = document.getElementById("numberInput").value;
    let output = document.getElementById("numberOutput");

    if (guessingState === 0) {
        generateNumber();
        guessingState = 1;
    }

    if (Number(numberValue) === randomNumber) {
        output.textContent = "Correct";
        guessingState = 0;
    } else if (Number(numberValue) > randomNumber) {
        output.textContent = "Lower";
    } else {
        output.textContent = "Higher";
    }
}