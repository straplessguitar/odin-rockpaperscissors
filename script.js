function playerMove() { // "Rock", "Paper" or "Scissors", case insensitive, needs correct formatting
    let playerSelec = prompt("Choose Rock, Paper or Scissors to play!").toLowerCase();
    return playerSelec.replace(playerSelec.charAt(0),playerSelec.charAt(0).toUpperCase());
} 

function computerMove() { // computer's random choice
    let compMove = Math.random();

    if (compMove <= 0.33)
        return "Rock";
    else if (compMove > 0.33 && compMove < 0.66)
        return "Paper";
    else if (compMove >= 0.66)
        return "Scissors"; 
} 

function round(playerSelection, computerSelection) { // decides winner of the round
    if (playerSelection == computerSelection)
        return "It's a tie! Both players chose " + playerSelection + "!";
    else if (playerSelection == "Rock" && computerSelection == "Paper")
        return "You lose! Paper covers Rock!";
    else if (playerSelection == "Rock" && computerSelection == "Scissors")
        return "You win! Rock crushes Scissors!";
    else if (playerSelection == "Paper" && computerSelection == "Rock")
        return "You win! Paper covers Rock!";
    else if (playerSelection == "Paper" && computerSelection == "Scissors")
        return "You lose! Scissors cuts Paper!";
    else if (playerSelection == "Scissors" && computerSelection == "Rock")
        return "You lose! Rock crushes Scissors!";
    else if (playerSelection == "Scissors" && computerSelection == "Paper")
        return "You win! Scissors cuts Paper!";
} // this function deserves better, but not today...

console.log(round(playerMove(), computerMove()));