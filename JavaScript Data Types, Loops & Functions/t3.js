function reverseNumber(num) {
    let reversed = 0;
    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    return reversed;
}

console.log(reverseNumber(532443)); 




function reverse() {
let x=prompt();
let r="";
for(let i=x.length-1 ;i>=0; i--){
    r+=x[i];}
   return r;}

console.log(reverse(x));







let i=0;
while(i<=15){
    if(i%2==0){
        console.log( i +"is even")
    }
    else{
        console.log( i +"is odd")

    }
    i++;
}


let n="025468";
let result;
for(i=0;i<n.length;i++){
    result +=n[i];
    if(n[i]%2==0 && n[i+1]%2==0){
    result +="-";

    }
}console.log(result);


function AGE(age){
    if (age>=18){
        console.log("The user is Adult");}
    else{
        console.log("The user is Minor");}

    }    
AGE(20);
AGE(14);