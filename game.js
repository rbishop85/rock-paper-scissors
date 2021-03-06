// Code for button to start game
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", playGame);

// Potential choices
var compChoices = ["R", "P", "S"];

// Starting value of wins, losses and ties
var wins = 0;
var losses = 0;
var ties = 0;

// Object containing each win condition
var winConditions = {
    R: "S",
    S: "P",
    P: "R"
};
// Object containing choice names
var names = {
    R: "Rock",
    S: "Scissors",
    P: "Paper"
};

function playGame(){

// Prompt player for choice
var playerChoice = prompt("What do you choose?\n[R]ock, [P]aper or [S]cissors!\n(Please only key in first letter.)");

// Make sure choice is in Upper Case
var playerChoice = playerChoice.toUpperCase();

// Verify that player selected appropriate letter or restart
if ( !compChoices.includes(playerChoice)){
    alert("That is not a valid choice!")
    return playGame();
}

// Random selection for computer
var index = Math.floor(Math.random() * compChoices.length);
var computer = compChoices[index];

// Determine and display final Results
var final = "";

if (playerChoice === computer) {
    ties++;
    final = "It was a tie!";
} else if (winConditions[playerChoice] === computer) {
    wins++;
    final = "Player won!";
} else {
    losses++;
    final = "Player lost!";
}

alert("Player chose: " + names[playerChoice] + "\nComputer chose: " + names[computer] + "\n" + final);

// Display total stats
alert("Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);

// Ask player if they wish to play again
var continuePlaying = confirm("Do you want to play again?");

if (continuePlaying){
    playGame();
}

}