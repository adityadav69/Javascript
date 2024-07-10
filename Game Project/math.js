// let x = Math.floor((Math.random() * 10) + 1);
// let y = Math.floor((Math.random() * 20) + 11);

// // let z = Math.floor((Math.random() * 15) + 1);
// // let p = Math.floor((Math.random() * 15) + 1);
// document.getElementById("p1").innerText =x ;
// document.getElementById("p2").innerText =y ;
// // document.getElementById("p3").innerText =z ;
// // document.getElementById("p4").innerText =p ;
// let box1=document.querySelector(".box1");
// let box2=document.querySelector(".box2");
// // let box3=document.querySelector(".box3");
// // let box4=document.querySelector(".box4");
// let number=0;
// console.log(number);

// box1.addEventListener("click",()=>{
    
//     if(number===x){
//         console.log("Correct number Guessed");
//     }
//     else{
//         console.log("Incorrect Number Guesses");
//     }
//     console.log("clicked on box1");
// })

// box2.addEventListener("click",()=>{
//     if(number===y){
//         console.log("Correct number Guessed");
//     }
//     else{
//         console.log("Incorrect Number Guesses");
//     }
//     console.log("clicked on box2");
// })
// let para=document.querySelector(".guess");
// const check=()=>{
//     if(number==x){
//         para.innerText="You Guess Correctly";

//     }
//     else if(number==y){
//         para.innerText="You Guess Correctly";

//     }
//     else{
//         para.innerText="Guess Again";
//     }
// }
// check();












// // let para=document.createElement("p");
// // let body=document.querySelector(".guess");
// // body.append(para);
// // // while(number!==x || number!==y){
// //     para.innerText="Guess Again";
// // // }

// // {/* <input id="myInput" type="text" value="Swag" />

// // <script>
// //     var test = "test";
// //     document.getElementById("myInput").value = test;
// // </script> */}

let x = Math.floor((Math.random() * 10) + 1);
console.log(x);
let number=prompt("Enter Your Number Between (1-10)");
while(number!=x){
    if(number>x){
    number=prompt("Enter smaller than this");
    }
    else if(number<x){
        number=prompt("Enter larger than this");
    }
   
}
let element=document.createElement("p");
let div=document.querySelector(".header");
element.setAttribute("class","guess");
element.innerText="Congratulation You Guess Correctly";
div.after(element);
