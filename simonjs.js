let gameseq=[];
let userseq=[];
let highscr=0;
let started=false;
let level=0;
let btns=["yellow","green","blue","red"];
let h3=document.querySelector("h3");
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelup();
    }
    
});

function checkAns(idx){
   if(userseq[idx]===gameseq[idx]){
      if(userseq.length===gameseq.length){
         setTimeout(levelup,1000);
      }
   } else{
      h2.innerHTML=`Game Over! Your Score was <b> ${level}</b> <br> Press any key to start Game`;
       started=false;
       let newhs=Math.max(highscr,level);
       highscr=newhs;
       h3.innerText=`HIGH SCORE IS ${newhs}`;

       level=0;
       gameseq=[];
       userseq=[];
   }
}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
    
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
    
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randClr=btns[randIdx];
    let randbtn=document.querySelector(`.${randClr}`);
    gameseq.push(randClr);
    btnFlash(randbtn);
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    userClr=btn.getAttribute("id");
    userseq.push(userClr);
    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}