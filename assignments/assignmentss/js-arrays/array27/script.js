const pairsum = (arr,target)=>{
  h=[]
  for(i=0;i<arr.length-1;i++)
  {
    if((arr[i]+arr[i+1])==target)
      {
        h.push([i+1,i+2])
      }
    
  }

  console.log(h)
}


pairsum([10,20,10,40,50,60,70],50)