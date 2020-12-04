const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8");

const lines = input.split("\n");

function treeProduct(slopes) {
  let treeProduct = 1;

  for(const slope of slopes){
    const right = slope[0];
    const down = slope[1];
    
    let index = 0;
    let treeCount = 0;

    for (i = 0; i < lines.length; i++) {
      if (index >= lines[i].length) {
        index = index % lines[i].length;
      }
      if (lines[i][index] === "#") {
        treeCount++;
      }

      index += right;
      
      if(down > 1){
        i += (down - 1)
      }
    }

    // console.log(`Trees: ${treeCount}`);
    
    treeProduct *= treeCount;
  }

  return treeProduct;
}

const slopeList = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2]
];

console.log(`Product: ${treeProduct(slopeList)}`);
