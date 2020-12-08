const fs = require("fs");
const { start } = require("repl");
let input = fs.readFileSync("./input.txt", "utf-8");

const bags = {};
let totalBags = 0;

input = input.split("\n");

for (let line of input) {
  line = line.split(" bag");
  line.pop();
  bags[line[0]] = [];

  for (let i = 1; i < line.length; i++) {
    const data = {};
    const newLine = line[i].split(" ").slice(-3);

    data[newLine.slice(-2).join(" ")] = newLine[0];
    bags[line[0]].push(data);
  }
}

function checkBags(bag, numBags) {
  for (const innerBag in bags[bag]) {
    let innerBags = numBags;
    if (!bags[bag] || Object.keys(bags[bag][0]).includes("no other")) {
      continue;
    } else {
      while (innerBags > 0) {
        for (let i = 0; i < bags[bag].length; i++) {
          const key = Object.keys(bags[bag][i]);
          const current = bags[bag][i][key];
          totalBags += parseInt(current);
          checkBags(key, current);
        }
        innerBags--;
      }
      return;
    }
  }
}

checkBags("shiny gold", 1);

console.log(`Bags inside shiny gold: ${totalBags}`);
