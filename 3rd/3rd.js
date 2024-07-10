// // for(let i=1;i<=100;i++){
// //     console.log("i= ",i);
// // }
// // console.log("Loop has ended");

// // let n=prompt("Enter the number :");
// // let sum=0;
// // for(let i=0;i<=n;i++){
// //     sum=sum+i;
// // }
// // console.log("sum= ",sum);

// //For of loop----This loop is used for strings and arrays...
// //syntax.
// /*for(let val of strvar){
//     do work
// }
// */
// let count=0;
// let str="Aditya Yadav";
// for(let i of str){
//     console.log("i= ",i);
//     count++;
// }
// console.log(count);

// //For in loop........
// //This loop is generally used for get key from object and sometime it is used for arrays also..
 
// let student={
//     name:"Aditya Yadav",
//     cgpa:8.9,
//     ispass:true,
//     id:23
// };
// for(let i in student){
//     console.log("i= ",i,"value =",student [i]);
// }

//Quick quiz------1

// let n=100;
// for(let i=2;i<n;i=i+2){
//     console.log(i);
// }

//Quick quiz------2
// let n=23;
// let number=prompt("Guess the actual number");

// while(number!=n){
//     number=prompt("Incorrect number guess !  Guess again:");
// }
// console.log("Congratulations ! You guess correctly");

//Strings
// 
/*STRINGS METHODS
1-str.toUppercase()---It convert string into Upper Case..
2-toLowerCase(str)---It convert string into Lower Case..
3-trim()---It remove extra white space from start and from end it does not remove white space in between str..
4-slice(start,end)---It take 2 parameter and it cut the string from start parameter from exclusive end parameter..
5-concat(str1,str2)---It add Two string..It can be also written by str1+str2..
6-replace(ch,cha)--- It replace 1st parameter into second parameter..
7-charAt[index]--- It print the character ar that index..

NOTE:Strings in javascript are immutable means doesn't change original string when we apply any method on it..
*/
// let str="aditya";
// let str2="  adf   "

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str2.trim());
// console.log(str.slice(2,4));
// console.log(str+str2);
// console.log(str.replace("a","d"));
// console.log(str.charAt[3]);

//Practice Q-1..
/*let name=prompt("Enter the name: ");
let len=name.length();
console.log(len);*/
let usernum=prompt("Enter the number(0-50)");
let original=45;
while(usernum!=original){
    usernum=prompt("You Entered wrong number:: please enter again");
}
console.log("Yay!  you entered right number ");

