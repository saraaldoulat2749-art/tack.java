function reverseNumber(x) {
    return Number(String(x).split('').reverse().join(''));
}
console.log(reverseNumber(532443));


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