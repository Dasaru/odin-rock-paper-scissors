window.onload = function() {
    console.log("Page loaded!");
}

function getComputerChoice() {
    let rand = Math.floor(Math.random()*3);
    switch (rand) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
        default:
            throw Error("Impossible value returned.");
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (playerSelection !== "ROCK" && playerSelection !== "PAPER" && playerSelection !== "SCISSORS") {
        throw Error("Bad player input. Values should be Rock, Paper, or Scissors.");
    }
    if (playerSelection === computerSelection) {
        return `Game is a tie! Both players played ${playerSelection}`;
    } else if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK")
    ) {
        // Player Wins
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        // Player loses
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}