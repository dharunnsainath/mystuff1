

const arr=[2,3,4,55,66,7,78]
const arr1=[]
const arr2=[]

for(i=0;i<arr.length;i++)
{
    if(i%2==0)
    {
        arr1.push(arr[i])
    }
    else{
        arr2.push(arr[i])
    }
}

console.log(arr1)
console.log(arr2)

