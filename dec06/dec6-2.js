const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8");

const groups = input.split("\n\n");
let totalYes = 0;

for (const group of groups) {
  const individual = group.split("\n");
  let numYes = [];

  for (const answers of individual) {
    for (const answer of answers) {
      if (numYes.includes(answer) === false) {
        numYes.push(answer);
      }
    }
  }

  for (const answer of numYes) {
    for (const answers of individual) {
      if (answers.includes(answer) === false && numYes.indexOf(answer) !== -1) {
        numYes = numYes.filter((x) => x !== answer);
      }
    }
  }

  totalYes += numYes.length;
}

console.log(`Total of all groups: ${totalYes}`);
