function getPlayerChoice() {
    let input = prompt('Please type your choice:');
    let playerChoice = input.toLowerCase();
    console.log(playerChoice);
    return playerChoice;
};

getPlayerChoice();