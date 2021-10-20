const options = ["rock", "paper", "scissors"];

function playerMove() { // "Rock", "Paper" or "Scissors", case insensitive, not error proof
    let playerInput;

    do
        playerInput = prompt("Choose Rock, Paper or Scissors to play!");
    while(!validInput(playerInput))

    return playerInput.toLowerCase();
}

function validInput(move) {
    if(options.includes(move))
        return true;
    else
        alert("That's not a valid move!")
}

function computerMove() { // computer's random choice
    let compMove = Math.floor(Math.random()*3); //Math.floor

    return options[compMove];
} 

function round(playerSelection, computerSelection) { // decides winner of the round
    if(playerSelection == computerSelection)
        return 2;

    switch(playerSelection){
        case 'rock':
            return computerSelection == 'scissors' ? 0 : 1;
        case 'paper':
            return computerSelection == 'rock' ? 0 : 1;
        case 'scissors':
            return computerSelection == 'paper' ? 0 : 1;
    }
} 

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    let winMove;
    let outcome;

    while(playerPoints < 3 && computerPoints < 3) {
        let currentPlayerSelection = playerMove();
        let currentCompSelection = computerMove();

        switch(round(currentPlayerSelection, currentCompSelection)) { // gets winner
            case 0:
                outcome = "You win!";
                winMove = currentPlayerSelection;
                playerPoints++;
                break;
            case 1:
                outcome = "You lose!";
                winMove = currentCompSelection;
                computerPoints++;
                break;
            case 2:
                outcome = "It's a tie!";
                winMove = "tie";
                break;
        }

        switch(winMove) { //gets winning move
            case 'rock':
                outcome = outcome.concat(' Rock crushes Scissors!');
                break;
            case 'paper':
                outcome = outcome.concat(' Paper covers Rock!');
                break;
            case 'scissors':
                outcome = outcome.concat(' Scissors cuts Paper!');
                break;
            case 'tie':
                outcome = outcome.concat(` Both players choose ${currentPlayerSelection}!`);
                break;
            default:
                break;
        }
        alert(`${outcome}\n\nPlayer has ${playerPoints} points!\nComputer has ${computerPoints} points!`);
    }

    playerPoints == 3 ? result = "win" : result = "lose";
    return `You ${result} best of 5! ${playerPoints} to ${computerPoints}!`;
}
game();