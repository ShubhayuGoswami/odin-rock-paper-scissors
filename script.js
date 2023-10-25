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
            computerChoice = 'scissor';
            break;
        
        case 2:
            computerChoice = 'paper';
            break;

        case 3:
            computerChoice = 'rock';
            break;
    }
    return computerChoice;
}

console.log(getPlayerChoice());
console.log(getComputerChoice());