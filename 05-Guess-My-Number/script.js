
'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
};
const displayScore = function (score) {
    document.querySelector(".score").textContent = score;
};

const checkGuess = function() {
    const guess = Number(document.querySelector(".guess").value);

    //no input
    if(!guess) {
        displayMessage("⛔ No number!");

    //player wins
    }  else if (guess === secretNumber) {
        displayMessage("🎉 Correct Number!");
        
    //display secret number when player wins
        document.querySelector(".number").textContent = secretNumber;
    //change the background color when a player wins
        document.querySelector("body").style.backgroundColor = "#60b347";
    //Increase the width of the number when a player wins
        document.querySelector(".number").style.width = "30rem";
    //highscore implementation
        if(score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        };

        //  If guess is wrong
        } else if (guess !== secretNumber) {
            if (score > 1) {
                displayMessage(guess > secretNumber ? "Too high! 📈" : "Too low! 📉");
                score--;
                displayScore(score);
            } else {
                displayMessage("You lost the game 🥵");
                displayScore(0);
            }
        }
};

document.querySelector(".check").addEventListener("click", checkGuess);

//Again btn functionality
document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = score;

    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";

    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});

// Enter key to trigger checkGuess function
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});
