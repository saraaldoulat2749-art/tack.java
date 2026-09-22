let menu = [
    { name: "Burger", price: "5", category: "main meal", available: "true" },
    { name: "Zinger", price: "10", category: "main meal", available: "true" },
    { name: "Shawerma", price: "3", category: "main meal", available: "true" },
    { name: "pizza", price: "15", category: "main meal", available: "true" },
    { name: "salat", price: "5", category: "appetisers", available: "true" }
];

function showMenu() {
    for (let i = 0; i < menu.length; i++) {
        console.log(menu[i].name + " - " + menu[i].price + " - " + menu[i].category + " - " + menu[i].available);
    }
}

showMenu();

let sf = 0;
while (sf<menu.length) {
    let userInput = prompt("Enter Your Food :");
    if (!userInput) {
            alert("Please enter a valid name.");
            continue;
        }
  
    let foundItem = menu.find(item => item.name.toLowerCase() === userInput.toLowerCase());

    if (!foundItem) {
        console.log("Item not found on the menu. Please try again.");
    } else {
        sf = foundItem;
       break;
    }
}
let quantity =Number(prompt("Enter Your quantity"));
let totalprice = Number(sf.price) * quantity ;

document.write("<h2>Final Order</h2>");

document.write("Food: " + sf.name + "<br>");

document.write("Price: " + sf.price + "<br>");

document.write("Quantity: " + quantity + "<br>");

document.write("Total Price: " + totalprice + "<br>");