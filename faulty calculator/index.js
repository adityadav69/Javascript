let a=prompt("Enter the first number");
let b=prompt("Enter the Second number");
let op=prompt("Enter the Operation you want to perform(+,-,*,/)");
a=Number(a);
b=Number(b);

let randomNumber=Math.floor(Math.random() * 100) + 1;

function faulty(a,b,op){
    if(op=='+'){
        console.log("Your answer is ",a-b);
    }
    else if(op=='-'){
        console.log("Your answer is ",a/b);
    }
    else if(op=='*'){
        console.log("Your answer is ",a+b);
    }
    else if(op=='/'){
        console.log("Your answer is ",a**b);
    }
}
if(randomNumber>10){
    if(op=='+'){
        console.log("Your answer is ",a+b);
    }
    else if(op=='-'){
        console.log("Your answer is ",a-b);
    }
    else if(op=='*'){
        console.log("Your answer is ",a*b);
    }
    else if(op=='/'){
        console.log("Your answer is ",a/b);
    }
}
else{
    faulty(a,b,op);
}
