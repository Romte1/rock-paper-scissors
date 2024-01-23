
function getComputerChoice(){
    let choice = Math.floor(Math.random()*100)+1;
    let choiceName = "";
    (choice<=33) ? choiceName='rock' : (choice>33 && choice<=66) ? choiceName='paper' : (choice>66 && choice<=99) ? choiceName = 'scissors': choiceName = "";
    return choiceName;
}

function playerSelection (){
let selection = prompt("Hello, choose between Rock, Paper or Scissors to play!");
let lowCaseSelection = selection.toLowerCase();

return lowCaseSelection;

}

function game() {
let win = 0;
let draw = 0;
let lose = 0;
    for (i = 0; i<5;i++){
        playRound(playerSelection(), getComputerChoice())
    
    }    
function playRound(playerSelection, computerSelection) {
    (playerSelection === computerSelection) ? (draw++, console.log("It's a TIE!")) : (playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock') ? (lose++, console.log(`You lost, ${computerSelection} beats ${playerSelection}!`)) : (win++, console.log(`You win, ${playerSelection} beats ${computerSelection}!`)); 



  }
}


game();