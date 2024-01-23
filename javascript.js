function getComputerChoice(){
    let choice = Math.floor(Math.random()*100)+1;
    let choiceName = "";
    (choice<=33) ? choiceName='Rock' : (choice>33 && choice<=66) ? choiceName='Paper' : (choice>66 && choice<=99) ? choiceName = 'Scissors': choiceName = "";
    return choiceName;
}

function playerSelection (selection){

let lowCaseSelection = selection.toLowerCase();

return lowCaseSelection;

}

let selection = prompt("Hello, choose between Rock, Paper or Scissors to play!");

playerSelection(selection);

getComputerChoice();