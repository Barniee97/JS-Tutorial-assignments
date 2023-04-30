'use strict';

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎊 Correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 15;


// document.querySelector(".guess").value = 12;
// console.log(document.querySelector(".guess").value);



const secretNumber = Math.trunc(Math.random() * 20) + 1; //to generate a secret numbert
let score = 20; //you set score at 20 i.e fixed score that will change if guesses are wrong

document.querySelector(".number").textContent = secretNumber;

//this method is to take action when the button (checked) is clicked, it takes the input value (guess) and run the if and else statements
document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    if(!guess) {
        document.querySelector(".message").textContent = "⛔ No Number!";
    }
    else if(guess === secretNumber) {
        document.querySelector(".message").textContent = "🎊 Correct Number!";
    }
    else if(guess > secretNumber) {
        if(score > 1) {
            document.querySelector(".message").textContent = "📈 Too high!";
            //to show reduction in score over a wrong guess
            score--;
            document.querySelector(".score").textContent = score;
         } else {
            document.querySelector(".message").textContent = "💥 You lost the game!"
         }

        
    }
    else if(guess < secretNumber) {
        document.querySelector(".message").textContent = "📉 Too low!";

        //to show reduction in score over a wrong guess
        score--;
        document.querySelector(".score").textContent = score;
    }
});
