const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let gamesPlayed = 0;
let playerWins = 0;
let computerWins = 0;
let roundResult = "";
let gameResult = "";
showResults();

rock.addEventListener("click", () => {
    playRound("ROCK");
    showResults();
});

paper.addEventListener("click", () => {
    playRound("PAPER");
    showResults();
});

scissors.addEventListener("click", () => {
    playRound("SCISSORS");
    showResults();
});

function showResults(resultMessage = "") {
    const results = document.querySelector("#results");
    let message =
        `Games Played: ${gamesPlayed}
        Player Wins: ${playerWins}
        Computer Wins: ${computerWins}
        
        ${roundResult}
        
        ${gameResult}`;
    results.innerText = message;
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

function playRound(playerSelection) {
    if (gamesPlayed >= 5) return;
    playerSelection = playerSelection.toUpperCase();
    computerSelection = getComputerChoice().toUpperCase();
    if (playerSelection !== "ROCK" && playerSelection !== "PAPER" && playerSelection !== "SCISSORS") {
        throw Error("Bad player input. Values should be Rock, Paper, or Scissors.");
    }
    gamesPlayed++;
    if (playerSelection === computerSelection) {
        roundResult = `Game is a tie! Both players played ${playerSelection}`;
    } else if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK")
    ) {
        // Player Wins
        roundResult = `You win! ${playerSelection} beats ${computerSelection}`;
        playerWins++;
    } else {
        // Player loses
        roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerWins++;
    }
    if (gamesPlayed >= 5) {
        if (playerWins > computerWins) {
            gameResult = `GAME OVER: You won the best of five!`;
        } else if (playerWins < computerWins) {
            gameResult = `GAME OVER: You lost the best of five!`;
        } else {
            gameResult = `GAME OVER: The best of five is a draw!`;
        }
    }
}

function isValidChoice(choice) {
    choice = choice.toUpperCase();
    return (
        choice === "ROCK" ||
        choice === "PAPER" ||
        choice === "SCISSORS"
    );
}