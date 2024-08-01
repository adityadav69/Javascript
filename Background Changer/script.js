let red=document.querySelector(".red");
let blue=document.querySelector(".blue");
let violet=document.querySelector(".violet");
let green=document.querySelector(".green");
let black=document.querySelector(".black");
let body=document.body;

red.addEventListener("click",()=>{
    console.log("red");
    body.style.backgroundColor="red";
})
green.addEventListener("click",()=>{
    console.log("green");
    body.style.backgroundColor="green";
})
blue.addEventListener("click",()=>{
    console.log("blue");
    body.style.backgroundColor="blue";
})
violet.addEventListener("click",()=>{
    console.log("violet");
    body.style.backgroundColor="violet";
})
black.addEventListener("click",()=>{
    console.log("black");
    body.style.backgroundColor="black";
})
