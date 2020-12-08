const fs = require("fs");
let input = fs.readFileSync("./input.txt", "utf-8");

const bags = {};
const countedBags = [];

input = input.split("\n");

for (let line of input) {
  line = line.split(" bag");
  line.pop();
  bags[line[0]] = [];

  for (let i = 1; i < line.length; i++) {
    bags[line[0]].push(line[i].split(" ").slice(-2).join(" "));
  }
}

function checkBags(bag) {
  if (!bags[bag] || bags[bag].includes("no other")) {
    return false;
  }
  if (bags[bag].includes("shiny gold")) {
    return true;
  }
  for (const innerBag of bags[bag]) {
    if (checkBags(innerBag)) {
      return true;
    }
  }
}

for (const bag in bags) {
  if (checkBags(bag)) {
    countedBags.push(bag);
  }
}

console.log(`Bags leading to shiny gold: ${countedBags.length}`);
