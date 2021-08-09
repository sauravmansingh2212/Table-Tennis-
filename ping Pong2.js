const winningscore=document.querySelector("#score");
const player1score=document.querySelector("#score1");
const player2score=document.querySelector("#score2");
const btn1=document.querySelector("#btn1");
const btn2=document.querySelector("#btn2");
const reset=document.querySelector("#btn3")
btn1.addEventListener("click",function(){
    if(player1score.innerText!=winningscore.value){
        player1score.innerText++;
    }
    else{
        alert("Player 1 won the game !!!")
    }
})
btn2.addEventListener("click",function(){
    if(player2score.innerText!=winningscore.value){
        player2score.innerText++;
    }
    else{
        alert("Player2 won the game !!!")
    }
})
reset.addEventListener("click",function(){
    player1score.innerText=0;
    player2score.innerText=0;
})