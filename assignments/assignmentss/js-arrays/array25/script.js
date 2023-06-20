val=[null, '0', '',"", false,undefined,NaN]

arr=[3,NaN, 0, 15, false, -22, '',undefined, 47, null]



const arra = arr.filter(function (letter) {
  return !val.includes(letter);
});



console.log(arra)