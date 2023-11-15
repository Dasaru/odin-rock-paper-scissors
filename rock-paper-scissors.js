window.onload = function() {
    console.log("Page loaded!");
    game();
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
        console.log(`Game is a tie! Both players played ${playerSelection}`);
        return 0;
    } else if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK")
    ) {
        // Player Wins
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return 1;
    } else {
        // Player loses
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return -1;
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

function game() {
    let gamesPlayed = 0;
    let playerWins = 0;
    let computerWins = 0;

    while (gamesPlayed < 5){

        // Get player input
        let playerChoice = prompt("Type either Rock, Paper, or Scissors.");
        console.log(`You picked ${playerChoice}`);

        // Valid player input
        if (isValidChoice(playerChoice)) {
            // Generate random computer choice.
            let computerChoice = getComputerChoice();
            // Play the round
            let result = playRound(playerChoice, computerChoice);
            // If there is a winner, increment the winner.
            if (result === 1) playerWins++;
            if (result === -1) computerWins++;
            // Increment the games played counter
            gamesPlayed++;
            
        } else {
            // Invalid player input
            console.log("Invalid input. Please input Rock, Paper, or Scissors.");
        }

    }

    console.log(`The player has won ${playerWins} times and the computer has won ${computerWins} times.`);
    if (playerWins > computerWins) {
        console.log(`You win the series!`);
    } else if (playerWins < computerWins) {
        console.log(`You lose the series...`);
    } else {
        console.log(`The series is a tie.`);
    }
}