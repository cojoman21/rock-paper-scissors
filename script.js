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

function getPlayerChoice() {
    let choice = "";
    let valid = false;
    while (!valid) {
        choice = prompt("Enter rock, paper or scissors:");
        choice = choice.toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            console.log(`The player picked ${choice}`);
            valid = true;
        } else {
            console.log("Whoops. Invalid choice! Please enter again.");
            continue;
        }
    }
    return choice;
}

function compare(player, computer) {
    //returns 1 if player won, 2 if computer won, 0 if draw
    if (player === computer) {
        return 0;
    }
    if (player === "rock") {
        if (computer === "scissors") {
            return 1;
        } else {
            return 2;
        }
    } else if (player === "paper") {
        if (computer === "scissors") {
            return 2;
        } else {
            return 1;
        }
    }
    //if player === scissors
    else {
        if (computer === "paper") {
            return 1;
        } else {
            return 2;
        }
    }
}

function displayScore(playerScore, computerScore) {
    console.log(console.log(`The player has ${playerScore} points and the computer has ${computerScore} points.`));
}

function playRound(round) {
    console.log(`This is round ${round}.`);
    let computerChoice = convertToString(getRandomInt(3));
    let playerChoice = getPlayerChoice();
    switch (compare(playerChoice, computerChoice)) {
        case 0:
            console.log(`The computer picked ${computerChoice}`);
            return "draw";
        case 1: {
            console.log(`The computer picked ${computerChoice}`);

            return "player";
        }
        case 2: {
            console.log(`The computer picked ${computerChoice}`);

            return "computer";
        }
    }
}

function playAgain() {
    choice = prompt("Want to play again? Enter yes/y or no/n: ");
    if (choice.toLowerCase() == "yes" || choice.toLowerCase() == "y") {
        return true;
    }
    return false;
}

function playGame() {
    let playAnother = true;
    while (playAnother) {
        console.log("The game has started!");
        let playerScore = 0;
        let computerScore = 0;
        let round = 1;
        while (round < 6) {
            winner = playRound(round);
            if (winner === "draw") {
                displayScore(playerScore, computerScore);
                console.log("This was a draw!");
                round++;
                continue;
            } else if (winner === "player") {
                playerScore++;
                round++;
                console.log("Player won this round!");
                displayScore(playerScore, computerScore);
                continue;
            } else {
                computerScore++;
                round++;
                console.log("Computer won this round!");
                displayScore(playerScore, computerScore);
                continue;
            }
        }
        if (playerScore > computerScore) {
            console.log("The player has won the game!");
            console.log("End of game.\n\n");
        } else if (playerScore === computerScore) {
            console.log("Nobody won.");
            console.log("End of game.\n\n");
        } else {
            console.log("The computer has won the game!");
            console.log("End of game.\n\n");
        }
        playAnother = playAgain();
    }
    console.log("Have a nice day.\n\n");
}
