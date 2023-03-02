function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
};

function getPlayerChoice() {
    let choice = prompt("Rock, Paper, or Scissors? ").toLowerCase();
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        return "That is not a valid option. Please try again.";
    }
    return choice;
}


function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection === computerSelection) {
        return "Tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "Computer Wins!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "Computer Wins!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "Computer Wins!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win!";
    } else {
        return "There was a problem with this round.";
    };
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()))
    }
}