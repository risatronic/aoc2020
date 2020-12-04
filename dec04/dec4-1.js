const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8");

const passports = input.split("\n\n");
const validFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid", "cid"];

let validCount = 0;

function isValid(passport) {
  const details = passport.split(/\s+/);
  
  if (details.length === 7 || details.length === 8) {
    for (let field of details) {
      field = field.split(":")[0];
      if (
        (validFields.includes(field) === false) ||
        (details.length === 7 && field === "cid")
      ) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

for (const passport of passports) {
  if (isValid(passport)) {
    validCount++;
  }
}

console.log(`Total valid passports: ${validCount}`);
