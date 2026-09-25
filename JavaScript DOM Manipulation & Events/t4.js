
 let nAme=document.getElementsByClassName('name');
 let oRder=document.getElementsByClassName('order') ;
 let but=document.querySelector('.button');
 but.onclick =function(){
    let Name= nAme[0].value;
    let Order= oRder[0].value;
document.write ("Hello " + Name +" ! Your order is "+Order );}

but.onmouseover = function(){
    but.style.color='red';
}
but.onmouseout = function(){
    but.style.color='black';
}

