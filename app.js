const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const firstNames = [];
const lastNames = [];

function getInput(prompt, array, callback) {
    rl.question(prompt, (input) => {
        array.push(input);
        callback();
    });
}

function combineNames() {
    console.log('Combined Full Names:');
    console.log('-------------------');
    console.log('First Name    | Last Name     | Full Name');
    console.log('----------------------------------------');

    for (let i = 0; i < firstNames.length; i++) {
        const fullName = `${firstNames[i]} ${lastNames[i]}`;
        console.log(`${padString(firstNames[i], 14)} | ${padString(lastNames[i], 13)} | ${fullName}`);
    }

    rl.close();
}

function padString(str, length) {
    return str + ' '.repeat(Math.max(0, length - str.length));
}

function askForMoreNames() {
    rl.question('Do you want to add more names? (yes/no): ', (answer) => {
        if (answer.toLowerCase() === 'yes') {
            startFirstNames();
        } else if (answer.toLowerCase() === 'no') {
            combineNames();
        } else {
            console.log('Invalid input. Please type "yes" or "no".');
            askForMoreNames();
        }
    });
}

function startLastNames() {
    getInput('Enter the last name: ', lastNames, askForMoreNames);
}

function startFirstNames() {
    getInput('Enter the first name: ', firstNames, startLastNames);
}

console.log('Enter first names. After each first name, press Enter.');
startFirstNames();
