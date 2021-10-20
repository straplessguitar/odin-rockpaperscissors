const options = ["rock", "paper", "scissors"];
const result = ["win", "lose", "tie"];

function playerMove() { // "Rock", "Paper" or "Scissors", case insensitive, not error proof
    let playerInput

    do
        playerInput = prompt("Choose Rock, Paper or Scissors to play!").toLowerCase();
    while(!validInput(playerInput))

    return playerInput;
}

function validInput(move) {
    if(options.includes(move))
        return true;
    else
        alert("That's not a valid move!")
}

function computerMove() { // computer's random choice
    let compMove = Math.random(); //Math.floor

    if(compMove <= 0.33)
        return options[0];
    else if(compMove > 0.33 && compMove < 0.66)
        return options[1];
    else if(compMove >= 0.66)
        return options[2];
} 

function round(playerSelection, computerSelection) { // decides winner of the round
    let outcome;

    if(playerSelection == computerSelection)
        outcome = "It's a " + result[2] + "! Both players chose " + playerSelection + "!";
    else if(playerSelection == options[0] && computerSelection == options[1])
        outcome = "You " + result[1] + "! Paper covers Rock";
    else if(playerSelection == options[0] && computerSelection == options[2])
        outcome = "You " + result[0] + "! Rock crushes Scissors!";
    else if(playerSelection == options[1] && computerSelection == options[0])
        outcome = "You " + result[0] + "! Paper covers Rock";
    else if(playerSelection == options[1] && computerSelection == options[2])
        outcome = "You " + result[1] + "! Scissors cuts Paper!";
    else if(playerSelection == options[2] && computerSelection == options[0])
        outcome = "You " + result[1] + "! Rock crushes Scissors!";
    else if(playerSelection == options[2] && computerSelection == options[1])
        outcome = "You " + result[0] + "! Scissors cuts Paper!";

    return outcome;
} // this function deserves better, but not today...

function game() {
    let playerPoints = 0;
    let computerPoints = 0;

    while(playerPoints < 3 && computerPoints < 3) {
        let outcome = round(playerMove(), computerMove());

        if(outcome.includes(result[0])) {
            playerPoints++;
        }else if(outcome.includes(result[1])){
            computerPoints++;
        }

        alert(outcome + "\n\nPlayer has " + playerPoints + " points!\nComputer has " + computerPoints + " points!");
    }

    if(playerPoints == 3)
        return "You win best of 5! " + playerPoints + " to " + computerPoints + "!";
    else
        return "You lose best of 5! " + playerPoints + " to " + computerPoints + "!";
}

game();