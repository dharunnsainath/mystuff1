function addPyPrefix(str) {
    if (str.startsWith("Py")) {
      return str;
    } else {
      return "Py" + str;
    }
  }
  
console.log(addPyPrefix("drone")); 
console.log(addPyPrefix("Python")); 
  