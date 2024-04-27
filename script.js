const board=document.getElementById("board");
const card=document.getElementsByClassName("class");
let counter=0;
let first="";
let flippedCard=[];
function flip(element){
    console.log("flippedCards:", flippedCard);
    if(element.textContent!='?') {
        // element.textContent=element.textContent;
        alert("card is already flipped");
        return;
    }
    counter++;
    element.style.background="#d27a7a";
    element.textContent =Math.abs(Math.floor(Math.random()*10)-5);
    flippedCard.push({element,value:element.textContent});
    setTimeout(()=>{
        if(counter===2){
            if(flippedCard[0].value==flippedCard[1].value){
            flippedCard.forEach(card=>{
                card.element.style.background="#9dc3be";
            })
            checkWin();
            flippedCard=[]
        }
            else{
                flippedCard.forEach(card=>{
                    console.log(card);
                reset(card.element);
            })
            flippedCard=[]
        }
        counter=0;
    }
    },500)
   

}

function reset(element){
    element.textContent='?';
    element.style.background="#809f83";
}
function checkWin(){
    let flag=false;
    
    for(let i=0;i<card.length;i++){
       if( card[i].textContent==="?") {
        flag=true;
        break;
       }

    }
    if(!flag)alert("You Wins");
}