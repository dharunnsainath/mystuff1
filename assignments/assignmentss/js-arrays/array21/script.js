
const flat=[]
let o=''
function flatten1(arr)
{
    
    for(let i=0;i<arr.length;i++)
{
   
    if(Array.isArray(arr[i]))
    {
        
        flatten1(arr[i])

        
    }
    else
    {
        flat.push(arr[i])
        
    }
}
return flat
}
// return output
// }

// console.log(flatten([1, [2], [3, [[4]]],[5,6]]))

// console.log(Array.isArray([1, 3, 5]));


let arr = [1, [2], [3, [[4]]],[5,6]]
let output = ''
function flatten(arr) {
  for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])){
      flatten(arr[i])
    }else{
      output += arr[i]
    }
  }
  return output
}


console.log(flatten(arr))

console.log(arr)
console.log(flatten1(arr))