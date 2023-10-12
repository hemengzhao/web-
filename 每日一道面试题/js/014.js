const str1 = "aabbcaacddaabbccdd";

function countCharOccurrences1(str, char) {
  let count = 0;
  let position = str.indexOf(char);
  while (position !== -1) {
    count++;
    position = str.indexOf(char, position + 1);
  }
  return count;
}

function countCharOccurrences2(str, char) {
  const reg = new RegExp(char, "g");
  return str.match(reg).length;
}

function countCharOccurrences3(str, char) {
  return str.split(char).length - 1;
}

console.log("countCharOccurrences", countCharOccurrences1(str1, "a"));
console.log("countCharOccurrences", countCharOccurrences2(str1, "a"));
console.log("countCharOccurrences", countCharOccurrences3(str1, "a"));
