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
    return selectionOptions[Math.floor(Math.random() * 3)];
};


function playRound(playerSelection, computerSelection) {
    let result = rules[playerSelection.toLowerCase()][computerSelection.toLowerCase()];
    return result;
};


function game() {
    let wins = 0;
    let ties = 0;
    let losses = 0;
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