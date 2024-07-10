function getdata(dataId,getnext){
    setTimeout(()=>{
        console.log("Data "+dataId);
        if(getnext){
            getnext();
        }
    },3000)
    
}
// // getdata(1)
// // getdata(2)
// // getdata(3)

getdata(1,()=>{
    getdata(2,()=>{
        getdata(3);
    })
})

// function aditya(){
//     console.log(aditya);
// }
// let father=(aditya);
// let grandfather=(father);
// let fatherofgrandfather=(grandfather);
// fatherofgrandfather(grandfather);


