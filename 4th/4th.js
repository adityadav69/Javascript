// let cities=["Delhi","Mumbai","Hyderabad","Gurgaon"];
// for(let element of cities){
//     console.log(element.toUpperCase());
// }
//Practice Q-1.......
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let i=0;i<marks.length;i++){
//     sum=sum+marks[i];
// }
// let average=sum/marks.length;
// console.log(`average of marks = ${average}`);

//Practice Q-2.........
// let price=[250,645,300,900,50];
// for(let i=0;i<price.length;i++){
//     price[i]=price[i]-price[i]*10/100;
// }
// for(let item of price){
//     console.log(`New price of items after discount are ${item}`);
// }

//Array methods..
/* 1----push()
   2----pop()
   3----tostring()
   4----unshift()
   5----shift()
   6----slice()
   7----splice()
   8----concat()
*/

// let num=[4,634,645,123,677,846];
// let num2=[34,54,67,87,98,0];
// num.push(56);
// console.log(`Array after push element are ${num}`);
// num.pop(56);
// console.log(`Array after pop element are ${num}`);
// num.toString();
// console.log(`Array after num.tostring element are ${num}`);
// num.unshift(34);
// console.log(`Array after unshift element are ${num}`);
// num.shift();
// console.log(`Array after shift element are ${num}`);
// let num3=num.concat(num2);
// console.log(`Array after concat element are ${num3}`);
/*let companies=["Bloomberg","Microsoft","Google","Amazon","Uber","IBM","Netflix"];
companies.shift();
console.log(`New companies are ${companies}`);
companies.splice(3,1,"ola");
console.log(`New companies are ${companies}`);
companies.push("Amazon");
console.log(`New companies are ${companies}`);*/
let cities=["delhi" ,"mumbai","Chennai"];
for(let city of cities){
   console.log(city.toUpperCase());
}




