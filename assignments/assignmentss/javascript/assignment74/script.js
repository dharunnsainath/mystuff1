const arr=[10,2,3,4,5]

l=arr[0]

if(l<=arr[arr.length-1])
{
  l=arr[arr.length-1]
  for(i=0;i<arr.length;i++)
  {
    arr[i]=l
  }
}
else
{
  l=arr[0]
  for(i=0;i<arr.length;i++)
  {
    arr[i]=l
  }
}

console.log(arr)