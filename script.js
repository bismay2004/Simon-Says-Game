let gameSeq = [];
let userSeq = [];
let btns = ["green", "red", "yellow", "blue"];
let level = 0;
let started = false;
let h3 = document.querySelector("h3");
let body = document.querySelector("body");
document.addEventListener("keydown",function(){
    if (started === false) {
        started = true;
        levelUp();
    }
});
document.addEventListener("touchstart", function(){
     if (started === false) {
        started = true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash"); 
     setTimeout(function(){
        btn.classList.remove("flash");
     },100)  
    
}
function userFlash(btn){
    btn.classList.add("userflash"); 
     setTimeout(function(){
        btn.classList.remove("userflash");
     },200) 
}
function levelUp(){
    level++;
    userSeq = [];
    h3.innerText = "Level " + level;
    let randIdx = Math.floor(Math.random() * 3);
    let randcolor = btns[randIdx];
    let randbtn =  document.querySelector("." + randcolor);
    gameSeq.push(randcolor);
    btnFlash(randbtn);
    console.log(gameSeq);
}
 
function checkAns(idx){
    console.log("level: " + level);
    if(userSeq[idx] === gameSeq[idx]){
        console.log("correct");
        
        if(userSeq.length == gameSeq.length){           
            setTimeout(levelUp, 800);     
        }
        
        
    }
    else{
        h3.innerHTML = "Game Over! Your score was <b>" + level + "</b>.<br> Press Any Key to Restart";
        wrong();
        resetGame();
    }
}

function btnPress(){
  let btn = this;
  btnFlash(btn);
  userFlash(btn);
  let usercolor = btn.getAttribute("id");
  console.log(usercolor);
  userSeq.push(usercolor);
  checkAns(userSeq.length-1);
}



let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function resetGame(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
    
}

function wrong(){
    body.classList.add("wrong");
    setTimeout(function(){
        body.classList.remove("wrong");
    }, 100);
    let sound = new Audio("mixkit-click-error-1110.wav");
    sound.play();
}


let sound = new Audio("mixkit-arcade-game-jump-coin-216.wav");
for (let btn of allBtns) {
  btn.addEventListener("click", function () {
     sound.play();
  });
}

let fbtn= document.querySelector(".button-89");
fbtn.addEventListener("click", function() {
    window.location.href = 'back.html';
});

