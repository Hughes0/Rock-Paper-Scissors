const selectionOptions = ["rock", "paper", "scissors"];

const rules = {
    rock: {
        rock: "tie",
        paper: "lose",
        scissors: "win"
    },
    paper: {
        rock: "win",
        paper: "tie",
        scissors: "lose"
    },
    scissors: {
        rock: "lose",
        paper: "win",
        scissors: "tie"
    }
};


function computerPlay() {
    // random selection
    return selectionOptions[Math.floor(Math.random() * 3)];
};


function playRound(playerSelection, computerSelection) {
    // get computer selection and play against players'
    let result = rules[playerSelection.toLowerCase()][computerSelection.toLowerCase()];
    return result;
};


function game() {
    let wins = 0;
    let ties = 0;
    let losses = 0;
    // play 5 games
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please enter a selection: ");
        let result = playRound(playerSelection, computerPlay());
        if (result == "win") {
            wins++;
        };
        if (result == "tie") {
            ties++;
        };
        if (result == "lose") {
            losses++;
        };
    };
    if (wins > losses) {
        console.log("You win");
    } else if (losses > wins) {
        console.log("You lose");
    } else {
        console.log("You tied");
    };
};


function highlightSelection(selection, result) {
    // set border color based on result
    if (result == "win") {
        var color = "green";
    } else if (result == "tie") {
        var color = "orange";
    } else {
        var color = "red";
    }
    // iterate through possible choices
    selectionOptions.forEach(option => {
        let element = document.getElementById(`${option}select`);
        if (option !== selection) {
            // case unhighlight
            element.style['border'] = "none";
        } else {
            // case highlight
            element.style['border'] = `1px solid ${color}`;
            element.style['border-radius'] = "5px";
        };
    });
};


function resetGame() {
    // reset status
    document.getElementById("status").textContent = "Make a selection to start the game";
    // reset scores
    document.getElementById("playerscore").textContent = "0";
    document.getElementById("computerscore").textContent = "0";
    // reset selection borders
    selectionOptions.forEach(option => {
        document.getElementById(`${option}select`).style['border'] = "none";
    });
};



function updateStatus(playerSelection, computerSelection, result) {
    let status = document.getElementById("status");
    let playerScore = document.getElementById("playerscore");
    let newPlayerScore = parseInt(playerScore.textContent) + 1;
    let computerScore = document.getElementById("computerscore");
    let newComputerScore = parseInt(computerScore.textContent) + 1;
    console.log(newPlayerScore);
    console.log(newComputerScore);
    if (newPlayerScore > 5 || newComputerScore > 5) {
        resetGame();
        newPlayerScore = 1;
        newComputerScore = 1;
    }
    // set status element
    if (result == "win") {
        // increase player score
        playerScore.textContent = newPlayerScore;
        if (newPlayerScore == 5) {
            status.textContent = "Game over, you win!";
            return;
        };
    } else if(result == "lose") {
        // increase computer score
        computerScore.textContent = newComputerScore;
        if (newComputerScore == 5) {
            status.textContent = "Game over, the computer wins!";
            return;
        }
    };
    status.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection}: ${result}`;
};





document.addEventListener('DOMContentLoaded', () => {
    // highlight button on selection
    selectionOptions.forEach(option => {
        document.getElementById(`${option}select`).addEventListener("click", () => {
            let computerSelection = computerPlay()
            let result = playRound(option, computerSelection);
            highlightSelection(option, result);
            updateStatus(option, computerSelection, result);
        });
    });
    // option to reset game
    document.getElementById("restart").addEventListener("click", resetGame);
});