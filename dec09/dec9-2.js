const fs = require("fs");
let input = fs.readFileSync("./input.txt", "utf-8");

input = input.split("\n").map((x) => parseInt(x));

const numberToReach = 69316178; // from part 1 to condense this file
let currentSum = 0;
let numbersAdded = [];

for (let i = 0; i < input.length; i++) {
  currentSum = input[i];
  numbersAdded = [input[i]];
  for (let j = i + 1; j < input.length; j++) {
    if (currentSum < numberToReach) {
      currentSum += input[j];
      numbersAdded.push(input[j]);
      if (currentSum === numberToReach && numbersAdded.length > 1) {
        numbersAdded.sort();
        const smallest = numbersAdded[0];
        const largest = numbersAdded[numbersAdded.length - 1];
        const weakness = smallest + largest;
        console.log(
          `Smallest: ${smallest}\nLargest: ${largest}\nWeakness: ${weakness}`
        );
        return;
      }
    }
  }
}
