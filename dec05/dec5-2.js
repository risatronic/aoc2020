const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8");

const values = input.split("\n");
const seatIDs = [];

function getNum(which, input) {
  let range, char1, char2, num;

  if (which === "row") {
    range = [0, 127];
    char1 = "F";
    char2 = "B";
  } else if (which === "seat") {
    range = [0, 7];
    char1 = "L";
    char2 = "R";
  }

  for (i = 0; i < input.length; i++) {
    switch (input[i]) {
      case char1:
        range[1] = Math.floor((range[0] + range[1]) / 2);
        if (i === input.length - 1) {
          num = range[1];
        }
        break;
      case char2:
        range[0] = Math.ceil((range[0] + range[1]) / 2);
        if (i === input.length - 1) {
          num = range[0];
        }
        break;
    }
  }

  return num;
}

for (const seat of values) {
  const rowNum = getNum("row", seat.slice(0, 7));
  const seatNum = getNum("seat", seat.substring(7));

  const seatID = rowNum * 8 + seatNum;

  seatIDs.push(seatID);
}

seatIDs.sort();

for (i = 0; i < seatIDs.length; i++) {
  if (seatIDs[i + 1] - seatIDs[i] > 1) {
    console.log(`My seat: ${(seatIDs[i + 1] + seatIDs[i]) / 2}`);
    return;
  }
}
