let image=document.querySelector('.image');
let cicle=document.querySelector('.cicle');
let square=document.querySelector('.square');
cicle.onclick=function(){
    image.style.borderRadius='50%';

}
square.onclick=function(){
    image.style.borderRadius='0%';
    
}