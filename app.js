let userScore=0;
let computerScore=0;
const userscore_span=document.getElementById("user-score");
const computerscore_span=document.getElementById("computer-score");
const scoreboard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".results p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");
const s="user".fontsize(3).sub();
const q="comp".fontsize(3).sub();


function getComputerChoice(){
    const choices =['r','p','s'];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function game(userChoice) {
    const computerChoice=getComputerChoice();
    switch(userChoice + computerChoice){
        case"rs":
        case"pr":
        case"sp":
            win(userChoice,computerChoice);  
            break;
        case"rp":
        case"ps":
        case"sr":
            lose(userChoice,computerChoice);  
            break;
        case"rs":
        case"pr":
        case"sp":
            draw(userChoice,computerChoice);  
            break;
    }
}
function convertToword(letter)
{
    if(letter=="r") return "Rock";
    if(letter=="p") return "Paper";
    return "Scissors";
}
function win(userChoice,computerChoice)
{
    userScore++;
    userscore_span.innerHTML=userScore;
    result_div.innerHTML= convertToword(userChoice)+s+ " beats " + convertToword(computerChoice)+q+ ".You win";
    
}
function lose(userChoice,computerChoice)
{
    computerScore++;
    computerscore_span.innerHTML=computerScore;
    result_div.innerHTML=convertToword(computerChoice)+q+" beats "+convertToword(userChoice)+s+".You lose.";
}
function draw(userChoice,computerChoice)
{
    result_div.innerHTML= convertToword(userChoice)+s+ " equals " + convertToword(computerChoice)+q+ ".Its a draw!!";
    console.log("DRAW");
}


function main(){
    rock_div.addEventListener("click",function(){
        game("r");
    })

    paper_div.addEventListener("click",function(){
        game("p");
    })

    scissor_div.addEventListener("click",function(){
        game("s");
    })
}

main();
