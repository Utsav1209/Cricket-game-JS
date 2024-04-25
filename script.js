let userScore = 0;
let computerScore = 0;
let choices = 0;

function computerChoice() {
    const choices = ['bat', 'ball', 'stump'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function play(userChoice) {
    const computer = computerChoice();
    let result = "";

    if (userChoice === computer) {
        result = "It's a tie!";
    } else if (
        (userChoice === "bat" && computer === "ball") ||
        (userChoice === "ball" && computer === "stump") ||
        (userChoice === "stump" && computer === "bat")
    ) {
        userScore++;
        result = "You win!";
    } else {
        computerScore++;
        result = "Computer wins!";
    }

    document.getElementById("result").innerHTML = `You chose ${userChoice}, computer chose ${computer}. ${result}`;
    updateScoreboard();

    choices++;
    if (choices === 50) {
        announceWinner();
    }
}

function updateScoreboard() {
    document.getElementById("userScore").innerHTML = `User: ${userScore}`;
    document.getElementById("computerScore").innerHTML = `Computer: ${computerScore}`;
}

function announceWinner() {
    let winner = "";
    if (userScore > computerScore) {
        winner = "You win the game!";
    } else if (computerScore > userScore) {
        winner = "Computer wins the game!";
    } else {
        winner = "It's a tie!";
    }
    document.getElementById("winnerText").innerHTML = winner;
    document.getElementById("winnerPopup").style.display = "block";
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    choices = 0;
    updateScoreboard();
    document.getElementById("result").innerHTML = "";
    document.getElementById("winnerPopup").style.display = "none";
}

document.getElementById("bat").addEventListener("click", function () {
    play("bat");
});
document.getElementById("ball").addEventListener("click", function () {
    play("ball");
});
document.getElementById("stump").addEventListener("click", function () {
    play("stump");
});

document.getElementById("playAgainButton").addEventListener("click", function () {
    resetGame();
});