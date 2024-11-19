const countTim = document.querySelector(".tim");
const resTim = document.querySelector(".resetvalue");
let count = 0;
let strtId;

const startTime = () =>{
    strtId = setInterval(()=>{
        countTim.innerText = count++;
    },1000);

};

const stopTime =() =>{
    clearInterval(strtId);
};

const resetTime =()=>{
    count = 0
    countTim.innerText = count;
    clearInterval(strtId);
}

const shoTime = ()=>{
    const newPara = document.createElement("p");
    newPara.innerText=`The Stop Time is: ${count}`;
    resTim.append(newPara);
}

const clearTime = () =>{
    resTim.innerHTML="";
}


document.querySelector("#strt").addEventListener("click",startTime);
document.querySelector("#stop").addEventListener("click",stopTime);
document.querySelector("#reset").addEventListener("click",resetTime);
document.querySelector("#puse").addEventListener("click",shoTime);
document.querySelector("#clear").addEventListener("click",clearTime); 