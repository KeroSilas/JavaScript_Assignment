function FtoC(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function CtoF(celsius) {
    return (celsius * 9/5) + 32;
}

function calculateTemperature() {
    let input = document.getElementById("tempInput");
    let tempValue = input.value;
    let output = document.getElementById("tempOutput");
    let celsius = document.getElementById("celsius");
    let fahrenheit = document.getElementById("fahrenheit");

    let result;

    if(celsius.checked) {
        result = CtoF(Number(tempValue));
        output.textContent = result;
    } else if (fahrenheit.checked) {
        result = FtoC(Number(tempValue));
        output.textContent = result;
    }
}