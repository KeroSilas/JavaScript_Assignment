let randomNumber;
let guessingState = 0;

function generateNumber() {
    randomNumber = Math.random() * 100;
    randomNumber = Math.floor(randomNumber);
    console.log(randomNumber)
}

function guessNumber() {
    let input = document.getElementById("numberInput");
    let numberValue = input.value;
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

    console.log(Number(numberValue))
}