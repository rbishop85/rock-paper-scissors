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
// Verify that player selected appropriate letter or cancel out
if ( !compChoices.includes(playerChoice)){
    alert("That is not a valid choice!")
    return playGame();
}


alert("Player chose : " + playerChoice)
// Get a random choice for the computer
var computer = Math.floor(Math.random() * compChoices.length);
// Broadcast Computer's Choice
alert("Computer chose " + compChoices[computer]);


// Compare Results
if (playerChoice === compChoices[computer]) {
    ties++;
    alert("It was a tie!");
} else if (winConditions[playerChoice] === compChoices[computer]) {
    wins++;
    alert("Player won!");
} else {
    losses++;
    alert("Player lost!");
}

alert("Stats:\nLosses: "+losses+"\nWins: "+wins+"\nTies: "+ties);
var isPlayingGame = confirm("Do you want to play again?");

if (isPlayingGame){
    playGame();
}

}

playGame();

console.log("Wins: " + wins);
console.log("Losses: " + losses);
console.log("Ties: " + ties);

// Compare user's choice to the computer's choice

    // If we meet a win condition
        // tally the win
    // If we meet a loss
        // tally the loss
    //If we meet a tie
        // tally the tie
