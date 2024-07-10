// let promise=new Promise((resolve,reject)=>{
//     console.log("Hello");
//     resolve(455);
// });
// console.log(promise);

// function getdata(dataId,nextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data "+dataId);
//             resolve(555);
//             if(nextData){
//                 getdata();
//             }
//         },5000)
//     })
// }
// let result=getdata(344);
// console.log(result);
const getpromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("i am in promise");
        reject("Network");
    })
}
let result=getpromise();
result.then((result)=>{
    console.log("kam ho gaya hai ", result);
})

result.catch((error)=>{
    console.log("Reject ho gaya hai sir due to ",error);
})