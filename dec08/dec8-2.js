const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8");

const instructions = input.split("\n");
let accumulator;

function generateInstructions() {
  const parsedInstructions = [];
  for (let instruction of instructions) {
    instruction = instruction.split(" ");
    instruction[1] = parseInt(instruction[1]);
    instruction.push(false);
    parsedInstructions.push(instruction);
  }
  return parsedInstructions;
}

function loopCheck(type, index) {
  const visitedIndices = [];
  const currentInstructions = generateInstructions();

  let i = 0;
  accumulator = 0;

  if (type === "infinite") {
    if (currentInstructions[index][0] === "jmp") {
      currentInstructions[index][0] = "nop";
    } else if (currentInstructions[index][0] === "nop") {
      currentInstructions[index][0] = "jmp";
    }
  }

  while (currentInstructions[i] && !currentInstructions[i][2]) {
    const instruction = currentInstructions[i];
    currentInstructions[i][2] = true;
    if (instruction[0] === "acc") {
      accumulator += instruction[1];
      i++;
    } else if (instruction[0] === "jmp") {
      const last = i;
      visitedIndices.push(last);
      i += instruction[1];
      if (currentInstructions[i][2]) {
        if (type === "indices") {
          return visitedIndices;
        } else {
          return true;
        }
      }
    } else if (instruction[0] === "nop") {
      visitedIndices.push(i);
      i++;
    }
  }
  return false;
}

const visitedIndices = loopCheck("indices");

for (const index of visitedIndices) {
  if (!loopCheck("infinite", index)) {
    console.log(`Last index: ${index}\nAccumulator: ${accumulator}`);
  }
}
