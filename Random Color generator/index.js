function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
let element=document.querySelectorAll(".boxes");
console.log(element);

element.forEach(e => {
    setInterval(()=>{
        e.style.backgroundColor=getRandomColor();
    },1)
});