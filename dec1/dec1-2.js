const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8");
const sum = 2020;

let values = input.split("\n");
values = values.map((x) => parseInt(x, 10)).sort((a, b) => a - b);

let smaller, larger;

for (i = 0; i < values.length; i++) {
  smaller = i + 1;
  larger = values.length - 1;

  while (smaller < larger) {
    if (values[i] + values[smaller] + values[larger] === sum) {
      console.log(`values: ${values[i]}, ${values[smaller]}, ${values[larger]}`);
      console.log(`product: ${values[i] * values[smaller] * values[larger]}`);
      return;
    } else if (values[i] + values[smaller] + values[larger] < sum) {
      smaller++;
    } else if (values[i] + values[smaller] + values[larger] > sum) {
      larger--;
    }
  }
}
