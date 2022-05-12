// Assignment Instructions-01
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('What is your Name? ', name => {
    console.log('Welcome ${name}');
    readline.close();
});