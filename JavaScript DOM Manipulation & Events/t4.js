
 let Name=document.getElementsByClassName('name').value;
 let Order=document.getElementsByClassName('order').value;
 let but=document.querySelector('.button').value;
 but.onclick =function(){
    //let Name= nAme[0].value;
    //let Order= oRder[0].value;
document.write ("Hello " + Name +" ! Your order is "+Order );}

but.onmouseover = function(){
    but.style.color='red';
}
but.onmouseout = function(){
    but.style.color='black';
}

