'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
}


document.querySelector(".check").addEventListener
("click", function() {
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
                document.querySelector(".score").textContent = score;
            } else {
                displayMessage("You lost the game 🥵");
                document.querySelector(".score").textContent = 0;
            }
        }
    });
       
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

