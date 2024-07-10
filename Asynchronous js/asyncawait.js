// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data aa gayi");
//             resolve(455);
//         },2000)
//     })
// }
// async function main(){
//     await api();
//     await api();
// }
// main();


function getdata(dataId,getnext){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data "+dataId);
            resolve(455);
        },3000)
    })
}
async function main(){
    console.log("Fetching data 1....");
    await getdata(1);
    console.log("Fetching data 2....");
    await getdata(2);
    console.log("Fetching data 3....");
    await getdata(3);
}
main();

