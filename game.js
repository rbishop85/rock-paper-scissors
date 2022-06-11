// Choices for computer
var choices = ["R", "P", "S"];

// Prompt player for choice
var playerChoice = prompt("What do you choose? R, P or S!");
// Make sure choice is in Upper Case
var playerChoice = playerChoice.toUpperCase();
// Verify that player selected appropriate letter or cancel out
if ( !choices.includes(playerChoice)){
    alert("That is not a valid choice!")
}


alert("Player chose : " + playerChoice)
// Get a random choice for the computer
var computer = Math.floor(Math.random() * choices.length);
// Broadcast Computer's Choice
alert("Computer chose " + choices[computer]);
// Compare Results
if (playerChoice === choices[computer]) {
    alert("It was a tie");
} else if (playerChoice === "R" && choices[computer] === "S") {
    alert("Player won!");
} else if (playerChoice === "P" && choices[computer] === "R") {
    alert("Player won!");
} else if (playerChoice === "S" && choices[computer] === "P") {
    alert("Player won!");
} else {
    alert("Player lost!");
}


// Compare user's choice to the computer's choice

    // If we meet a win condition
        // tally the win
    // If we meet a loss
        // tally the loss
    //If we meet a tie
        // tally the tie
