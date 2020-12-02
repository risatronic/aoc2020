const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8');

const values = input.split('\n');
let validCount = 0;

for(let value of values){
  const line = value.split(' ');

  const numbers = line[0].split('-');
  const index1 = numbers[0] - 1;
  const index2 = numbers[1] - 1;

  const targetLetter = line[1][0];

  const password = line[2];

  if((password[index1] === targetLetter && password[index2] !== targetLetter) ||
  (password[index2] === targetLetter && password[index1] !== targetLetter)){
    validCount++;
  }
}

console.log(`Total valid passwords: ${validCount}`);
