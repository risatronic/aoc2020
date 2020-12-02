const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8');

const values = input.split('\n');
let validCount = 0;

for(let value of values){
  const line = value.split(' ');

  const numbers = line[0].split('-');
  const min = numbers[0];
  const max = numbers[1];

  const targetLetter = line[1][0];

  const password = line[2];

  let letterCount = 0;

  for(const letter of password){
    if(letter === targetLetter){
      letterCount++;
    }
  }

  if(letterCount >= min && letterCount <= max){
    validCount++;
  }
}

console.log(`Total valid passwords: ${validCount}`);
