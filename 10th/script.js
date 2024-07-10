// /*const student={
//     FullName:"Aditya Yadav",
//     Marks:90.99,
//     Roll_no:13,
//     printmarks(){
//         console.log(this.Marks);
//     }
// };

// const Aditya={
// printmarks(){
//     console.log("Je");
// }
// }
// Aditya.__proto__=student;
// Aditya.printmarks();
// */
class ToyotaCar{
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop");
    }
    setBrandName(brand){
        this.brand=brand;
    }

}
let forturner=new ToyotaCar();
forturner.setBrandName("Fortune s1");
console.log(forturner.brand);
forturner.start();
forturner.stop();


let lexis=new ToyotaCar();
lexis.setBrandName("lexis N1");
console.log(lexis.brand);
lexis.start();
lexis.stop();