var array_last = function(arr,n) {
  k=Math.max(0,n)
  return arr.slice(0,k);
     };
 console.log(array_last([1, 2, 4, 0],2));
 console.log(array_last([1, 2, [4, 0]],-2));