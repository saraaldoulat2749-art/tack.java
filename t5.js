let bold = document.querySelector('.bold');
let Underline = document.querySelector('.Underline');
let Italic = document.querySelector('.Italic');
let paragraph = document.querySelector('.p');
let Roman=document.querySelector('.roman');
let Size=document.querySelector('.size');
Roman.onclick = function() {
        paragraph.style.fontFamily = Roman.value;
   
}
Size.onclick = function() {
        paragraph.style.fontSize = Size.value;
   
}
bold.onclick = function() {
        paragraph.style.fontWeight = 'bold';
   
}
Underline.onclick = function() {
        paragraph.style.textDecoration = 'underline';
   
}
Italic.onclick = function() {
        paragraph.style.fontStyle = 'Italic';
   
}