let inputText = document.getElementById("inputText");
let addButton = document.getElementById("addButton");
let listTask = document.getElementById("listTask");

let arr = JSON.parse(localStorage.getItem("task")) || [];


for (let i = 0; i < arr.length; i++) {
    listTask.innerHTML += "<p>"+arr[i] +"<button onclick='deleteTask(this)'>Delete</button>"+"</p>";
}

addButton.onclick = function() {

    let task = inputText.value;

    arr.push(task);
    
    localStorage.setItem("task", JSON.stringify(arr));
    
    for (let i = 0; i < arr.length; i++) {
        listTask.innerHTML += `
            <p>
                ${task} 
                <button onclick="deleteTask(${arr[i]})">Delete</button>
            </p>`;
    }
}


function deleteTask(btn, index) {
    arr.splice(index, 1); 
    localStorage.setItem("task", JSON.stringify(arr));
    btn.parentElement.remove();
}