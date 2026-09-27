let menu = [
  {
    name: "zinger",
    price: 3,
    category: "food",
    available: true,
  },
  {
    name: "burger",
    price: 2,
    category: "food",
    available: true,
  },
  {
    name: "pitzza",
    price: 5,
    category: "food",
    available: true,
  },
  {
    name: "Shawerma",
    price: 6,
    category: "food",
    available: true,
  },
  {
    name: "salat",
    price: 7,
    category: "food",
    available: true
  }
];

function showMenu()
{
   for(let i=0 ; i<menu.length;i++) 
   {
    console.log(menu[i].name + "  " + menu[i].price + menu[i].category);
   }
}

showMenu();


let foodName ;
let selectedItem;
let available= false;

while(available === false)
{
    foodName = prompt("please enter food name ");
  for(let i=0 ; i<menu.length;i++) 
  {
    if(menu[i].name === foodName )
    {
        available= true;
        selectedItem = menu[i];
        break;
    }else
    {
        continue;
    }
  }

}

console .log(foodName);


 for(let i=0 ; i<menu.length; i++) {
   if(menu[i].name === foodName) {
      document.write("<h3>Selected Food Details:</h3>");
      for(let x in menu[i]) {
          document.write(x + " : " + menu[i][x] + "<br>");
      }
   }
}

let quantity =Number(prompt("Enter quantity:"));
let totalPrice = selectedItem.price * quantity;
document.write("Quantity : " +quantity +"<br>");
document.write("TotalPrice : " +totalPrice);

