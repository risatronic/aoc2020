const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8");

const instructions = input.split("\n");
const parsedInstructions = [];

for (let instruction of instructions) {
  instruction = instruction.split(" ");
  instruction[1] = parseInt(instruction[1]);
  instruction.push(false);
  parsedInstructions.push(instruction);
}

let i = 0;
let accumulator = 0;

while (parsedInstructions[i] && !parsedInstructions[i][2]) {
  const instruction = parsedInstructions[i];
  parsedInstructions[i][2] = true;
  if (instruction[0] === "acc") {
    accumulator += instruction[1];
    i++;
  } else if (instruction[0] === "jmp") {
    const last = i;
    i += instruction[1];
    if (parsedInstructions[i][2]) {
      console.log(`Index wrapped at: ${last}\nAccumulator: ${accumulator}`);
    }
  } else {
    i++;
  }
}
