let body=document.querySelector("body");
let mode="white";
let btn=document.querySelector("button");
let element=document.createElement("p");
element.innerText="This is paragraph";
body.prepend(element);
btn.addEventListener("click",()=>{
    if(mode==="white"){
        mode="black";
        body.classList.add("black");
        body.classList.remove("white");

    }
    else{
        mode="white";
        body.classList.add("white")
        body.classList.remove("black");
    }
    console.log(mode);
})