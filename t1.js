let name = prompt("Your Name");
let age = Number(prompt("Your Age"));
let gender = prompt("Your Gender");

if(gender=="male")
{
alert("Welcome Mr " + name );
}
else if(gender=="female") {
    alert("Welcome Ms " + name );
}
else  {
    alert("Welcome " + name );

} 

//Part2
let order;
 let orderstatus;
if(age<16){
         orderstatus= "You are not eligible to place an order";

    document.write("You are not eligible to place an order");
}
else { 
   order = prompt("Ask the user to enter one of the following Burger Shawarma Zinger");

if(order == "Burger" || order =="Shawarma" || order =="Zinger" ){
 orderstatus= "Your order is being prepared";
alert("Your order is being prepared");
}
else{
   orderstatus= ".Invalid order. Please try again";
  alert(".Invalid order. Please try again");

}

if(age>="18" && (order == "Burger" || order =="Shawarma" || order =="Zinger")){
    document.write("Order confirmed");
}
else{
        document.write("Order requires verification");

}}
console.log("Your Name "+ name);
console.log("Age "+ age);
console.log("Your Order "+ order);
console.log("Your Order Status "+ orderstatus);


document.write("<p>Your Name "+name+"</p>");
document.write("<p>Age "+ age+"</p>");
document.write("<p>Your Order "+ order+"</p>");
document.write("<p>Your Order Status "+ orderstatus+"</p>");