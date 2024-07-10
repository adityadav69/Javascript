//Comments in javascript
//Comments are not executed in javascript...
//Compiler or interpreter ignores the comment...
/*There are two types of comment in javascript...
1st---Single line comment--(  //  ) this symbol is used for write single line comment.
2nd---Multi line comments--Used for comment multi line comments like we start symbolin 4 line and end in 1st line.
*/

//Operator//

//Arithmetic Operator
/*There are four arithmetic operator
1---(+,-,*,/)
*/
let a=10;
let b=2;
console.log("a=",a,"and b=",b);
console.log("a + b= ",a+b);
console.log("a - b= ",a-b);
console.log("a * b= ",a*b);
console.log("a / b= ",a/b);

/*2---MODULUS OPERATOR (%)...
This returns the remainder.
*/

console.log("a % b ",a%b);

// 3---EXPONENTIATION OPERATOR
console.log("a**b",a**b );

//4---UNARY OPERATOR...
/* 1--INCREMENT OPERATOR.
   2--DECREMENT OPERATOR.
   */
   console.log("a++", a++);

   console.log("++a",++a);

   console.log("a--",a--);
   
   console.log("--a",--a);

//ASSIGNMENT OPERATOR

let c=9;
let d=10;
c+=5;
d**=2;
console.log(c);
console.log(d);


//COMPARISON OPERATOR
/*  >=,,<=, ==, ===,etc
*/
let x=90;
let y="90";
console.log("X==Y",x===y);

//LOGICAL OPERTOR

/*&&,|| , !=;

*/
//CONDITIONAL STATEMENT 

//AS SAME AS C++ SYNTAX AND LOGIC 

//Practice q--1........

// let p=prompt("Enter the number");
// if(p%5===0){
//     console.log("Entered number is divisible by 5");
// }
// else{
//     console.log("Entered number is not divisible by 5");
// }

//practice q--2.....
let marks=prompt("Enter Your marks (0-100)  :");
if(marks>=80 && marks<=100){
    console.log("Your grade is A");
}
else if(marks>=70 && marks<80){
    console.log("Your grade is B");
}
else if(marks>=60 && marks<70){
    console.log("Your grade is C");
}
else if(marks>=50  && marks<60){
    console.log("Your grade is D");
}
else{
    console.log("You are Fail");
}