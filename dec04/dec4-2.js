const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8");

const passports = input.split("\n\n");
let validCount = 0;

const validFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid", "cid"];
const eyeColours = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];

function isValid(passport) {
  const details = passport.split(/\s+/);

  if (details.length === 7 || details.length === 8) {
    for (let field of details) {
      field = field.split(":");
      const key = field[0];
      let value = field[1];

      if (
        validFields.includes(key) === false ||
        (details.length === 7 && key === "cid")
      ) {
        return false;
      } else {
        switch (key) {
          case "byr":
            if (value < 1920 || value > 2002) {
              return false;
            }
            break;
          case "iyr":
            if (value < 2010 || value > 2020) {
              return false;
            }
            break;
          case "eyr":
            if (value < 2020 || value > 2030) {
              return false;
            }
            break;
          case "hgt":
            if (value.includes("in")) {
              value = value.slice(0, -2);
              if (value < 59 || value > 76) {
                return false;
              }
            } else if (value.includes("cm")) {
              value = value.slice(0, -2);
              if (value < 150 || value > 193) {
                return false;
              }
            } else {
              return false;
            }
            break;
          case "hcl":
            if (
              value.length !== 7 ||
              value[0] !== "#" ||
              (/[0-9A-Fa-f]{6}/g).test(value.substring(1)) === false
            ) {
              return false;
            }
            break;
          case "ecl":
            if (value.length !== 3 || eyeColours.includes(value) === false) {
              return false;
            }
            break;
          case "pid":
            if (value.length !== 9 || (/^\d+$/).test(value) === false) {
              return false;
            }
            break;
          default:
            break;
        }
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
