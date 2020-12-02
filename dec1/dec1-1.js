const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8');
const sum = 2020;

let values = input.split('\n');
values = values.map(x => parseInt(x, 10)).sort((a, b) => (a-b));

let smaller = 0;
let larger = values.length - 1;
let found = false;

while(!found){
  if(values[smaller] + values[larger] === sum){
    console.log(`values: ${values[smaller]}, ${values[larger]}`)
    console.log(`product: ${values[smaller] * values[larger]}`)
    found = true;
  } else if(values[smaller] + values[larger] < sum){
    smaller++;
  } else if(values[smaller] + values[larger] > sum){
    larger--;
  }
}
