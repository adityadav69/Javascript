
// function sum(x,y){
//     let s=x+y;
//     return s;
// }

// let val=sum(12,34);
// console.log(val);
//Arrow Function
// let add=(x,y)=>{
//     let sum=x+y;
//     return sum;
// }
// let multiply=(x,y)=>{
//     let product=x*y;
//     return product;
// }
// console.log("add of argument pass in the function is ",add(45,63));
// console.log("Multiply of two argument that is pass in funtion is ",multiply(5,8));

//Practice Q--1
// function count_vowel(s){
//     let count=0;
//     for(let i=0;i<s.length;i++){
//         if(s.at(i)=='a' || s.at(i)=='e' || s.at(i)=='i' || s.at(i)=='o' ||s.at(i)=='o'){
//             count++;
//         }
//     }
//     return count;
// }
// let check_string=prompt("Enter the string in which you count the number of vowel");
// console.log("No of vowel in string are",count_vowel(check_string));

//Practice q-2;
// let count_vowel=(s)=>{
//     let count=0;
//     for(let i=0;i<s.length;i++){
//         if(s.at(i)=='a' || s.at(i)=='e' || s.at(i)=='i' || s.at(i)=='o' ||s.at(i)=='o'){
//             count++;
//         }
//     }
//     return count;
// }
// let check_string=prompt("Enter the string in which you count the number of vowel");
// console.log("No of vowel in string are",count_vowel(check_string));

//foreach method

// let arr=[34,453,65,31,67];
// arr.forEach((value,index)=>{
//     console.log(value,index);
// })
// let cities=["Mumbai","Delhu","Pune"];
// cities.forEach((val)=>{
//     console.log(val.toUpperCase());
// })

//practice--3

// let arr=[2,6,4,7,5];
// arr.forEach(
//     (val)=>{
//         val=val*val;
//         console.log(val);
//     }
// )
// function print(){
//  console.log("Hello G");
// }
// print();
let factorial=(n)=>{
    if(n==1 || n==0){
        return 0;
    }
    else{
    return (n)*factorial(n-1);
}
}
console.log(factorial(3));