function sortLetters(str) {
 
  let chars = str.split("");

  
  chars.sort((a, b) => a.localeCompare(b, "en"));

  
  let sortedStr = chars.join("");

  return sortedStr;
}

console.log(sortLetters("Dharun")); 
console.log(sortLetters("spearing")); 
