function computerPlay() { // computer's random choice
    let compMove = Math.random();

    if (compMove < 0.33)
        return "Rock";
    else if (compMove > 0.33 && compMove < 0.66)
        return "Paper";
    else if (compMove > 0.66)
        return "Scissors"; 
}

console.log("Computer plays: " + computerPlay() + "!");