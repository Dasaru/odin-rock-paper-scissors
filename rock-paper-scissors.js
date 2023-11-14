window.onload = function() {
    console.log("Page loaded!");
}

function getComputerChoice() {
    let rand = Math.floor(Math.random()*3);
    switch (rand) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            throw Error("Impossible value returned.");
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Game is a tie! Both players played ${playerSelection}`;
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock")
    ) {
        // Player Wins
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        // Player loses
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}