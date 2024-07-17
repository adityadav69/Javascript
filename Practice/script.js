async function main() {
    let a = await fetch('https://jsonplaceholder.typicode.com/todos')
    let b = await a.json()
    let titles = [];
    let lis = document.getElementsByTagName("li")
    for (let i = 0; i < 10; i++) {
        titles.push(b[i].title.split(" ")[0])
        lis[i].innerHTML=titles[i];
    }
 
    for (let li of lis) {
        li.addEventListener("click", () => {
            let match=li.innerHTML;
            for(let i=0;i<titles.length;i++){
                if(match===titles[i]){
                   li.innerHTML=i;
                }
            }
        });
    }
    
}
main()