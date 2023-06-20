const array1 = [1,0,2,3,4];
const array2 = [3,5,6,7,8,13];

k=Math.max(array1.length,array2.length)
const arr3=[]
for(i=0;i<k;i++)
{
    
    
    if(array1[i]==undefined)
    {
        array1[i]=0
    }
    if(array2[i]==undefined)
    {
        array2[i]=0
    }

    arr3.push(array1[i]+array2[i])



}

console.log(arr3)

