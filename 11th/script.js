// let promise=new Promise((resolve,reject)=>{
//     console.log("I am promise");
//     // resolve("Success");
//     reject("Error aa gaya hai");
// })
// function getdata(dataId){

//     return new Promise((resoleve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resoleve("Success");
//         },5000)
//     }) 
// }
// function getpromise(){
//     return new Promise((resolve,reject)=>{
//        console.log("I am a promise");
//     //    resolve("success done")
//     reject("Newtwork error aa gaya")

//     })
// }
// let promise=getpromise();
// promise.then((res)=>{
//     console.log("Success",res);
// })
// promise.catch((err)=>{
//     console.log("errroe",err);
// })
// function asyncfun1(){
//     return new Promise((resolve,reject)=>{setTimeout(()=>{
//         console.log("data1");
//         resolve("Success");
//     },4000)})
    
// }
// function asyncfun2(){
//     return new Promise((resolve,reject)=>{ setTimeout(()=>{
//         console.log("data2");
//         resolve("Success");
//     },4000)})
// }
// let p1=asyncfun1();
// console.log("Fetching data 1...");
// p1.then((res)=>{
//     console.log("Fetching data 2...");
//     let p2=asyncfun2();
//     p2.then((res)=>{
//     })
// })
function async1(){
    return new Promise((resolve,reject)=>{setTimeout(()=>{
        console.log("whether data");
        resolve(200)
    },2000)})
    
}
async function getwether(){
    await async1();
    await async1();
    await async1();
    await async1();
}
getwether()



















/*console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("Hello");
},2000);
console.log("three");
console.log("four");
*/
// function getdata(dataId,getNext){
//     setTimeout(()=>{
//             console.log("Data",dataId);
//             if(getNext){
//                 getNext()
//             }
   
//     },2000);  
// }
// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3);
//     });
// })