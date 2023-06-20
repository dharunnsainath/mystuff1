const arr=[1,2,3,4,5,6,7]
const arr1=[]
for(i=0;i<arr.length;i++)
{
  arr1.push(arr[(i+3)%7])
}

console.log(arr1)