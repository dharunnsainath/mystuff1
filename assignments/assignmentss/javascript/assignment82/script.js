n1=234
n2=783


  var result = 0,
      x = 1;
  while (n1 > 0 && n2 > 0) {
      result += x * ((n1 + n2) % 10);
      n1 = Math.floor(n1 / 10);
      n2 = Math.floor(n2 / 10);
      x*= 10;
  }
  
  console.log(result)

  //String.fromCharCode(my_string.charCodeAt(my_string.length - 1) + 1)