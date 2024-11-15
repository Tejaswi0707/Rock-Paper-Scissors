//Initialize an array with 3 choices(rock, paper, and scissors)
const choices=["rock","paper","scissors"];
const result=document.getElementById("result");

//Select each button from HTML where results will be shown
const rockButton=document.getElementById("rock");
const paperButton=document.getElementById("paper");
const scissorsButton=document.getElementById("scissors");

//Function to randomly select a choice for the computer
function getComputerChoice(){
    const randomIndex=Math.floor(Math.random()*3);
    return choices[randomIndex];
}

//Function to determine the winner  based on the user's choice and the computer's choice
function getResult(userChoice, computerChoice){
    //Check if both choices are the same, resulting in a tie
    if (userChoice == computerChoice){
        return "It's a tie!";
    }
    else if (
        (userChoice=="rock" && computerChoice=="scissors")||
        (userChoice=="scissors" && computerChoice=="paper")||
        (userChoice=="paper" && computerChoice=="rock")
    ){
        return "You win!";

    }
    else{
        return "You Lose!"
    }
}

function playGame(userChoice){
    const computerChoice=getComputerChoice();
    const res=getResult(userChoice, computerChoice);
    result.textContent=`${res}`;
}

//When user clicks Rock button
rockButton.addEventListener("click",()=>playGame("rock"));
//When user clicks Paper button
paperButton.addEventListener("click",()=>playGame("paper"));
//When user clicks scissors button
scissorsButton.addEventListener("click",()=>playGame("scissors"));

