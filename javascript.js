const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const wins = document.querySelector('.wins');
const draws = document.querySelector('.draws');
const loses = document.querySelector('.loses');
const game = document.querySelector(('.gameAnnouncement'));

rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});

function getComputerChoice(){
    let choice = Math.floor(Math.random()*100)+1;
    let choiceName = "";
    (choice<=33) ? choiceName='rock' : (choice>33 && choice<=66) ? choiceName='paper' : (choice>66 && choice<=99) ? choiceName = 'scissors': choiceName = "";
    return choiceName;
}

    let win = 0;
    let draw = 0;
    let lose = 0;


   
function playRound(playerSelection, computerSelection) {
    (playerSelection === computerSelection) ? (draw++, game.textContent = ("It's a TIE!")) : (playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock') ? (lose++, game.textContent = (`You lost, ${computerSelection} beats ${playerSelection}!`)) : (win++, game.textContent = (`You win, ${playerSelection} beats ${computerSelection}!`));
    wins.textContent = win;
    draws.textContent = draw;
    loses.textContent = lose;

    declareWinner();

  }

function declareWinner() {
    if (win == 5 || lose == 5) {
        (win==5) ? alert('You Win! GG...') : alert ('You lost! sadge...');
        win = 0;
        draw = 0;
        lose = 0;
        wins.textContent = win;
        draws.textContent = draw;
        loses.textContent = lose;
    }
}
