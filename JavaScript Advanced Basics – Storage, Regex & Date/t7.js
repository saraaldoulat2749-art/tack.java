
function RestaurantOrdering (){
let UserName = document.querySelector(".UserName").value;
let Password = document.querySelector(".Password").value;
let PhoneNumber = document.querySelector(".PhoneNumber").value;
let Order = document.querySelector(".Order").value;

let UserNameRegex = /^\S+$/;
let PasswordRegex = /^(?=.*\d).{8,}$/;
let PhoneNumberRegex = /^07\d{8}$/;

if (!UserNameRegex.test(UserName)) 
{
    alert("Error: The username must not be empty or contain spaces.");
        return;

}

if (!PasswordRegex.test(Password)) 
{
    alert("Error: The password must be at least 8 characters long and include at least one number.");
    return;
}

if (!PhoneNumberRegex.test(PhoneNumber)) 
{
    alert("Error: Please enter a valid phone number.");
    return;
}
alert("Welcome, " + UserName);
localStorage.setItem("Order" , Order);
document.write("Order : " , Order , "<br>");

sessionStorage.setItem("UserName :" , UserName);
document.write("User Name :" , UserName);
}

