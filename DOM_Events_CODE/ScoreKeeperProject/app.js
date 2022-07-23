// Instantiate object literals for players
const playerOne = {
    score: 0,
    button: document.querySelector("#p1boost"),
    display: document.querySelector("#pOneDisplay")
}

const playerTwo = {
    score: 0,
    button: document.querySelector("#p2boost"),
    display: document.querySelector("#pTwoDisplay")
}

// Target Score 
let targetScoreSelect = document.querySelector('select');
let targetScore = targetScoreSelect.value;

// Reset Button
const resetButton = document.querySelector('#reset');

// GameOver Indicator
let gameOver = false;

const incrementScore = function(player, opponent){
    player.score += 1;
    player.display.innerText = player.score;

    if(player.score == targetScore){
        gameOver = true;
        player.display.classList.add('winner');
        opponent.display.classList.add('loser');
        player.button.disabled = true;
        opponent.button.disabled = true;
    }
}



// DOM Event Listeners

playerOne.button.addEventListener('click', function(){
    if(!gameOver){
        incrementScore(playerOne, playerTwo);
    }
});

playerTwo.button.addEventListener('click', function(){
    if(!gameOver){
        incrementScore(playerTwo, playerOne);
    }
});

targetScoreSelect.addEventListener('change', function(){
    targetScore = this.value; // sets the target score
})

resetButton.addEventListener('click', function(){

    // Reset Scores
    playerOne.score = 0;
    playerTwo.score = 0;

    // Reset Score Displays
    playerOne.display.innerText = playerOne.score;
    playerOne.display.classList.remove('winner', 'loser');
    playerOne.button.disabled = false;

    playerTwo.display.classList.remove('winner', 'loser');
    playerTwo.display.innerText = playerTwo.score;
    playerTwo.button.disabled = false;

    // New Game
    gameOver = false;

})