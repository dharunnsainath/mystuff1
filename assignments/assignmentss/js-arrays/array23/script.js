
const difference = (arr1,arr2)=>{

  arr1=arr1.flat(Infinity)
  arr2=arr2.flat(Infinity)
  k=Math.max(arr1.length,arr2.length)
  const arr3=[]
  for(i=0;i<k;i++)
{
    
    
    if(arr1[i]==undefined)
    {
        arr1[i]=0
    }
    if(arr2[i]==undefined)
    {
        arr2[i]=0
    }
    if((arr2[i]-arr1[i])!=0)
    {
      arr3.push(arr2[i]-arr1[i])
    }
    



}

console.log(arr3)

}

difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]])