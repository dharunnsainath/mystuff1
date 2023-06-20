const arr=[1,2,3]

for(i=0;i<parseInt(arr.length/2);i++)
{
  temp= arr[i]
  arr[i]=arr[arr.length-i-1]
  arr[arr.length-i-1]=temp
}

console.log(arr)