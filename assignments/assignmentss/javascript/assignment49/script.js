function replaceWithNextAlphabet(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (currentChar === "z" || currentChar === "Z") {
      // Handle special case for 'z' and 'Z' by wrapping around to 'a' and 'A'
      result += String.fromCharCode(currentChar.charCodeAt(0) - 25);
    } else if (
      (currentChar >= "a" && currentChar < "z") ||
      (currentChar >= "A" && currentChar < "Z")
    ) {
      // Replace with the next character in the alphabet
      result += String.fromCharCode(currentChar.charCodeAt(0) + 1);
    } else {
      // Non-alphabetic character, keep as it is
      result += currentChar;
    }
  }
  return result;
}

// Example usage:
console.log(replaceWithNextAlphabet("Dharun")); 
console.log(replaceWithNextAlphabet("Hello World!")); 