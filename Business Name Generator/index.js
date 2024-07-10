let adjective={
    0:"Crazy",
    1:"Amazing",
    2:"Fire"
}
let ShopName={
    0:"Engines",
    1:"Food",
    2:"Garments"
}
let AnotherNames={
    0:"Bros",
    1:"Limited",
    2:"Hub"
}
let Number1 = Math.floor(Math.random() * 3);
let Number2 = Math.floor(Math.random() * 3);
let Number3 = Math.floor(Math.random() * 3);
console.log(adjective[Number1]+" "+ShopName[Number2]+"",AnotherNames[Number3]);
