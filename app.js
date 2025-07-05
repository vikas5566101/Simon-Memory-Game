let gameSeq = [];
let userSeq = [];

let btns = ["red","green","yellow","blue"]

let started = false;
let level = 0;

let h3 = document.querySelector('h3')
document.addEventListener("keypress",function(){
    if(started == false){
        started = true;

        levelUp();
    }
    
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 300);
}

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx]
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    
    btnFlash(randBtn);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    }, 300);
}

function checkAns(idx){
    if (userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h3.innerHTML = `Game over! <b>your SCORE is ${level}</b>.<br> Please press any key to Restart the New Game<br>`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "white";
        },150)
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
};

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
} 

function reset(){
    started=false;
    gameSeq=[];
    UserSeq=[];
    level=0;

}