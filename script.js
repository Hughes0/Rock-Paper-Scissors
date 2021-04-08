const selectionOptions = ["Rock", "Paper", "Scissors"]

function computerPlay(playerSelection, computerSelection) {
    return selectionOptions[Math.floor(Math.random() * 3)];
};