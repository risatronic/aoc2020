const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8");

const lines = input.split("\n");

let index = 0;
let treeCount = 0;

for (i = 0; i < lines.length; i++) {
  if (index >= lines[i].length) {
    index = index % lines[i].length;
  }
  if (lines[i][index] === "#") {
    treeCount++;
  }
  index += 3;
}

console.log(treeCount);
