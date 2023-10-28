function getPlayerChoice() {
    let input = prompt('Please type your choice:');             //This function gets input from the user to run the game
    let playerChoice = input.toLowerCase();
    return playerChoice;
};

function getComputerChoice() {
    let computerChoice = '';
    let randomizer = Math.floor(Math.random()*3)+1;             /*This function will randomly select
                                                                    out of the available options in order
                                                                    to combat the user input.*/
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

let playerScore = 0; /*This variable keeps track of the number of times the user has won.
                        Set to 0 before game starts*/

let computerScore = 0; /*This variable keeps track of the number of times the computer has won.
                            Set to 0 before game starts*/

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

        } else if (playerChoice === 'paper' && computerChoice === 'rock') {         /*This function takes the user input and the random computer choice
                                                                                    in order to determine a winner for a single round.*/ 
            
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
                                             /*This function will continuously run the playRound function
                                             for specified number of times and will show who won after 
                                             running the playRound function*/
    if (playerScore>=computerScore) {
    
        console.log(`You win! You have scored ${playerScore} points in ${number} rounds`);
    
    } else {
    
        console.log(`You lose! Computer has scored ${computerScore} points in ${number} rounds`);
    
    }

};

game(5);