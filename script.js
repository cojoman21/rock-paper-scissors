let playerScore = 0;
let computerScore = 0;

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        startGame(event.target.innerText);
    });
});

const pChoices = document.querySelector("#choices");
const pScore = document.querySelector("#score");

pScore.innerText = displayScore(playerScore, computerScore);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function convertToString(computerValue) {
    switch (computerValue) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return;
    }
}

function displayScore(playerScore, computerScore) {
    return `Player score: ${playerScore} \n Computer score: ${computerScore}`;
}

function playRound(player) {
    let computerChoice = convertToString(getRandomInt(3));
    player = player.toLowerCase();

    pChoices.innerText = `The player has picked ${player}.\nThe computer has picked ${computerChoice}.`;

    if (player === computerChoice) return "draw";
    if (player === "rock" && computerChoice === "paper") return "computer";
    if (player === "rock" && computerChoice === "scissors") return "player";
    if (player === "paper" && computerChoice === "rock") return "player";
    if (player === "paper" && computerChoice === "scissors") return "computer";
    if (player === "scissors" && computerChoice === "rock") return "computer";
    if (player === "scissors" && computerChoice === "paper") return "player";
}

function clearState() {
    pChoices.innerText = "Waiting for round to start...";
    playerScore = 0;
    computerScore = 0;
    pScore.innerText = displayScore(playerScore, computerScore);
}

function startGame(button) {
    const winner = playRound(button);

    if (winner === "draw") {
        pScore.innerText = displayScore(playerScore, computerScore);
    } else if (winner === "player") {
        playerScore++;
        pScore.innerText = displayScore(playerScore, computerScore);
        if (playerScore >= 5) {
            window.alert(`You won! Pick Rock, Paper or Scissors to start a new game.`);
            clearState();
            return;
        }
    } else {
        computerScore++;
        pScore.innerText = displayScore(playerScore, computerScore);
        if (computerScore >= 5) {
            window.alert(`The computer won! Pick Rock, Paper or Scissors to start a new game.`);
            clearState();
            return;
        }
    }
}
