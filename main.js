let input = "turpentine and turtles";
let inputLength = input.length;

const vowels = ["a", "e", "i", "o", "u"];

let resultArray = [];
let inputArray = [];

for (let i = 0; i < inputLength; i++) {
  inputArray.push(input[i]);
  if (inputArray[i] === "e" || inputArray[i] === "u") {
    resultArray.push(inputArray[i]);
  }

  for (let j = 0; j < vowels.length; j++) {
    if (inputArray[i] === vowels[j]) {
      //console.log(vowels[j], j);
      resultArray.push(vowels[j]);
    }
  }
}
//console.log(inputArray);
console.log(resultArray);

let resultString = resultArray.join("");

console.log(resultString.toUpperCase());
