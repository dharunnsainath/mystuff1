const allPoss=(str)=>{
    const arr=[]
    for(i=0;i<=str.length-1;i++)
    {
            for(j=i;j<=str.length-1;j++)
            {
               
                arr.push(str.substring(i,j+1))
            }
    }
    return arr



}


console.log(allPoss('dog'))