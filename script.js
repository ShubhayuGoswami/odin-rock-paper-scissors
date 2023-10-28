function getPlayerChoice() {
    let input = prompt('Please type your choice:');
    let playerChoice = input.toLowerCase();
    return playerChoice;
};

function getComputerChoice() {
    let computerChoice = '';
    let randomizer = Math.floor(Math.random()*3)+1;
    switch (randomizer) {
        case 1:
            computerChoice = 'scissors';
            break;
        
        case 2:
            computerChoice = 'paper';
            break;

        case 3:
            computerChoice = 'rock';
            break;
    }
    return computerChoice;
};

let playerScore = 0;
let computerScore = 0;

function playRound() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

        if (playerChoice === computerChoice) {
            console.log('Round Drawn');
        } else if (playerChoice === 'rock' && computerChoice === 'paper') {
            console.log('You lose! Paper pockets Rock');
            computerScore++;
            return (computerScore);
        } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
            console.log('You win! Rock bonks Scissors');0
            playerScore++;
            return (playerScore);
        } else if (playerChoice === 'paper' && computerChoice === 'rock') {
            console.log('You win! Paper pockets Rock');
            playerScore++;
            return (playerScore);
        } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
            console.log('You lose! Scissors cuts Paper');
            computerScore++;
            return (computerScore);
        } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
            console.log('You win! Scissors cuts Paper');
            playerScore++;
            return (playerScore);
        } else {
            console.log('You lose! Rock bonks Scissors');
            computerScore++
            return (computerScore);
        };
};

function game(number) {
    for (let i = 1; i <= number; i++) {
        playRound();
    };

    if (playerScore>=computerScore) {
        console.log(`You win! You have ${playerScore} points`);
    } else {
        console.log(`You lose! Computer has ${computerScore} points`);
    } 
};

game(5);