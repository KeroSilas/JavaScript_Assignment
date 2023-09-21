function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function calculateTemperature() {
    let tempValue = document.getElementById("tempInput").value;
    let output = document.getElementById("tempOutput");
    let celsius = document.getElementById("celsius");
    let fahrenheit = document.getElementById("fahrenheit");

    let result;

    if(celsius.checked) {
        result = celsiusToFahrenheit(Number(tempValue));
        output.textContent = result;
    } else if (fahrenheit.checked) {
        result = fahrenheitToCelsius(Number(tempValue));
        output.textContent = result;
    }
}