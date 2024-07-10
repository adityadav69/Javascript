let a =prompt("Enter the number you want to check factorial");
a=Number(a);
let factorial=1;
if(a==1){
    console.log("factorial is ",1);
}else{
for(let i=1;i<=a;i++){
    factorial=factorial*i;
}
console.log("Factorial is ",factorial);
}