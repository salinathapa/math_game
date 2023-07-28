const readline = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout,
  });

const c = require('ansi-colors');

console.log('Welcome to my Math Game');

playGame();

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function playGame() {
    readline.question('Roll dice? (y/n): ', (answer) => {
        const result = rollDice();

        if (answer.toLocaleLowerCase() === 'y') {
            console.log(c.green(`You rolled a ${result}!`));
            playAgain();
        } else if (answer.toLocaleLowerCase() === 'n') {
            readline.close();
            console.log('Thanks for playing!');
        } else {
            console.log('Invalid input. Please try again.');
            playGame();
        }
    })
}

function continueGame () {
    const result = rollDice();
    console.log(c.green(`You rolled a ${result}!`));
    playAgain();
}

function playAgain() {
    readline.question('Roll again? (y/n): ', (answer) => {
        if (answer.toLocaleLowerCase() === 'y') {
            continueGame();
        } else if (answer.toLocaleLowerCase() === 'n') {
            readline.close();
            console.log('Thanks for playing!');
        } else {
            console.log('Invalid input. Please try again.');
            playAgain();
        }
    })
}