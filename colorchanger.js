function changeColor() {
    let color = document.getElementById("colors").value;

    switch(color) {
        case "White":
            document.body.style.backgroundColor = "white";
            break;
        case "Red":
            document.body.style.backgroundColor = "red";
            break;
        case "Blue":
            document.body.style.backgroundColor = "blue";
            break;
        case "Green":
            document.body.style.backgroundColor = "green";
            break;
        default:
            document.body.style.backgroundColor = "white";
    }
}