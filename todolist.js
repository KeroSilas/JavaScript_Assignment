function createTask() {
    let list = document.getElementById("list");
    let taskValue = document.getElementById("taskInput").value;
    let node = document.createElement("li");

    node.textContent = taskValue;
    list.appendChild(node);

    node.addEventListener("click", function() {
        this.remove(); //https://stackoverflow.com/questions/67185751/how-can-i-delete-items-from-a-list-in-javascript-by-clicking
    });
    list.prepend(node);
}