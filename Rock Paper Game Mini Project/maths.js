let userScore=0;
let compScore=0;
const choises=document.querySelectorAll(".choise");
const msg=document.querySelector("#msg");
const comp=document.querySelector("#comp-score");
const user=document.querySelector("#user-score");

const generatecompChoise=()=>{
    const arr=["Rock","Paper","Scissor"];
    let ind=Math.floor(Math.random()*3);
    return arr[ind];
}
const draw=()=>{
    msg.innerText="Game Was Draw";
    msg.style.backgroundColor="#081b31";
    console.log("Game was draw");
}
const showWIn=(userWin,userChoise,compChoise)=>{
    if(userWin){
        userScore++;
        user.innerText=userScore;
        msg.innerText=`You win! ${userChoise} beats the ${compChoise}`;
        msg.style.backgroundColor="green";
        console.log("You win");
    }
    else{
        compScore++;
        comp.innerText=compScore;
        msg.innerText=`You loose! ${compChoise} beats the ${userChoise}`;
        msg.style.backgroundColor="red";
        console.log("You loose");
    }
}
const playgame=(userChoise)=>{
    console.log("User Choise is ",userChoise);
    const compChoise=generatecompChoise();
    console.log("Computer Choise is ",compChoise);
    if(userChoise===compChoise){
        draw();
    }
    else{
        let userWin=true;
        if(userChoise==="Rock" && compChoise==="Paper"){
            userWin=false;
        }
        else if(userChoise==="Rock" && compChoise==="Scissor"){
            userWin=true;
        }
        else if(userChoise==="Paper" && compChoise==="Rock"){
            userWin=true;
        }
        else if(userChoise==="Paper" && compChoise==="Scissor"){
            userWin=false;
        }
        else if(userChoise==="Scissor" && compChoise==="Rock"){
            userWin=false;
        }
        else if(userChoise==="Scissor" && compChoise==="Paper"){
            userWin=true;
        }
        else{

        }
        showWIn(userWin,userChoise,compChoise);
    }
}

choises.forEach((choise)=>{
    choise.addEventListener("click",()=>{
        const userChoise=choise.getAttribute("id");
        console.log("choise was clicked",userChoise);
        playgame(userChoise);
    })
})