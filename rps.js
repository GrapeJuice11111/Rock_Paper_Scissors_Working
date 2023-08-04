const btns = document.querySelectorAll("button");
let counterForComputer = 0;
let counterForPlayer = 0;
btns.forEach(button => button.addEventListener('click', function(e){
   var userChoice = ""
   userChoice = this.classList.value;
   if (counterForComputer > 4 || counterForPlayer > 4 )
   {
    pick.textContent = ""
   }
   else{
    pick.textContent = `You chose ${userChoice}`;
   }
   
    function getComputerChoice(){
    let choices = ["rock","paper","scissors"];
    computerChoice = choices[Math.floor(Math.random() * 3)]; 
    var choice = "";
    choice = computerChoice;
    return choice;
   }
   function playRound(playerSelection,computerSelection){
    restart.textContent = ``
    if( playerSelection === computerSelection ){
        div.textContent = "Draw. They both are the same thing";
        pointsPlayer.textContent = `Points : You : ${counterForPlayer} `;
        pointsComputer.textContent = `Points : Computer : ${counterForComputer}`;
    }
    else if( playerSelection === "rock" && computerSelection === "paper"){
        div.textContent = "Paper beats Rock. You lose.";
        counterForComputer = counterForComputer + 1;
        pointsPlayer.textContent = `Points : You : ${counterForPlayer} `;
        pointsComputer.textContent = `Points : Computer : ${counterForComputer}`;
        

    }
    else if( playerSelection === "paper" && computerSelection === "rock" ){
        div.textContent = "Paper beats Rock. You win.";
        counterForPlayer = counterForPlayer + 1;
        pointsPlayer.textContent = `Points : You : ${counterForPlayer} `;
        pointsComputer.textContent = `Points : Computer : ${counterForComputer}`;


    }
    else if( playerSelection === "scissors" && computerSelection === "rock"){
        div.textContent = "Rock beats Scissor. You lose";
        counterForComputer = counterForComputer + 1;
        pointsPlayer.textContent = `Points : You : ${counterForPlayer} `;
        pointsComputer.textContent = `Points : Computer : ${counterForComputer}`;

        


    } 
    else if( playerSelection === "rock" && computerSelection === "scissors"){
        div.textContent = "Rock beats Scissors. You win.";
        counterForPlayer = counterForPlayer + 1;
        pointsPlayer.textContent = `Points : You : ${counterForPlayer} `;
        pointsComputer.textContent = `Points : Computer : ${counterForComputer}`;


    }
    else if( playerSelection === "paper" && computerSelection === "scissors"){
        div.textContent = "Scissors beats Paper. You lose";
        counterForComputer = counterForComputer + 1;
        pointsPlayer.textContent = `Points : You : ${counterForPlayer} `;
        pointsComputer.textContent = `Points : Computer : ${counterForComputer}`;
        

    }
    else if( playerSelection === "scissors" && computerSelection === "paper"){
        div.textContent = "Scissors beats Paper. You win";
        counterForPlayer = counterForPlayer + 1;
        pointsPlayer.textContent = `Points : You : ${counterForPlayer} `;
        pointsComputer.textContent = `Points : Computer : ${counterForComputer}`;


    }
} 
    playRound(userChoice,getComputerChoice());
    if(counterForComputer > 4) {
    div.textContent = "The computer has won. Humanity is done for.";
    restart.textContent = `Pick One To Restart The Game`
    counterForComputer = 0;
    counterForPlayer = 0;
    
    }
    else if(counterForPlayer > 4){
    div.textContent = "The Player has won. Congratulations you saved us. You are the hero";
    restart.textContent = `Pick One To Restart The Game`
    counterForComputer = 0;
    counterForPlayer = 0;
    }    
}));


const round = document.querySelector(".roundresult");
const div = document.querySelector(".results");
const pick = document.querySelector(".pick");
const pointsComputer = document.querySelector(".compCounter");
const pointsPlayer = document.querySelector(".playerCounter");
const restart = document.querySelector(".restart")