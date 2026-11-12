let gameSeq = [];
let userSeq = [];
let highestScore = 0;

let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");


document.addEventListener("keypress" , function(){
    // console.log("game started");
    if(started==false) {
        // console.log("game is started");
        started = true;

        levelUp();
    }
});


function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    // random button choose 
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn); 

    gameSeq.push(randColor);
    // console.log(gameSeq);

    gameFlash(randbtn);
};



function checkSeq(idx){
    // console.log(`current level ${level}`);

    if(userSeq[idx] === gameSeq[idx]){
        // console.log("same value");
        if (userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        } 
    } 
    else {

        if (level > highestScore) {
            highestScore = level; 
            h3.innerText = `Highest Score: ${highestScore}`;
        }


        h2.innerHTML = `game over! your score was <b>${level}</b> <br> press any key to restart`;
        let bodyColor = document.querySelector("body");
        bodyColor.style.backgroundColor = "red";
        setTimeout(function(){
            bodyColor.style.backgroundColor = "white";
        },350);
        reset();
    }
};




function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    // checkSeq();  // to check the current level of the game 
    checkSeq(userSeq.length-1);

};

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);  
};

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
};



let h3 = document.createElement("h3");
h3.innerText = `Highest Score: ${highestScore}`;
h3.style.position = "fixed";
h3.style.top = "20px";
h3.style.right = "20px";
h3.style.margin = "0";
document.body.appendChild(h3);
