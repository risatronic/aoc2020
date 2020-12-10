const fs = require("fs");
let input = fs.readFileSync("./input.txt", "utf-8");

input = input.split("\n").map(x => parseInt(x));

const preambleLength = 25;
let preamble = [0, preambleLength];

for(const number of input.slice(preambleLength)){
  let currentNumbers = input.slice(preamble[0], preamble[1]);
  let found = true;

  for(let i = 0; i < currentNumbers.length; i++){
    for(let j = currentNumbers.length - 1; j >= 0; j--){
      if(currentNumbers[i] + currentNumbers[j] === number){
        found = false;
        break;
      }
    }
  }

  preamble[0]++;
  preamble[1]++;

  if(found){
    console.log(`First valid number: ${number}`);
    return;
  }
}
