/// Async Await 

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


//promises then catch


function asynfunction1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data 1");
            resolve(455);
        },4000)
    })
}
function asynfunction2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data 2");
            resolve(555);
        },4000)
    })
}
function asynfunction3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data 3");
            resolve(655);
        },4000)
    })
}
function asynfunction4(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data 4");
            resolve(755);
        },4000)
    })
}

let p1=asynfunction1();
console.log("Fetching data 1....");
p1.then((res)=>{
    console.log(res);
    let p2=asynfunction2();
    console.log("Fetching data 2....");
    p2.then((res)=>{
        console.log(res);
        let p3=asynfunction3();
        console.log("Fetching data 3....");
        p3.then((res)=>{
            console.log(res);
            let p4=asynfunction4();
            console.log("Fetching data 4....");
            p4.then((res)=>{
                console.log(res);
            })
        })
    })
})

//callback
/*
function getdata(dataId,getnext){
    setTimeout(()=>{
        console.log("Data "+dataId);
        if(getnext){
            getnext();
        }
    },3000)
    
}


getdata(1,()=>{
    getdata(2,()=>{
        getdata(3);
    })
})
*/