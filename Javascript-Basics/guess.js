let guessRange = prompt("Enter your maximum number");

const guessNumber = Math.floor(Math.random() * guessRange) + 1;

let userGuess = prompt("Enter your guess now");

while(userGuess !== guessNumber){
    if(userGuess < guessNumber){
        userGuess = parseInt(prompt("Your guess was too low"));
    }
    else if(userGuess > guessNumber){
        userGuess = parseInt(prompt("Your guess was too high"));
    }
    else{
        console.log("You win!");
        break
    }
}



