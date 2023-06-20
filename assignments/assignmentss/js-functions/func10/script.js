const Identity=(val)=>{
    
    const arr1=[]
    for(i=0;i<val;i++)
    {const arr2=[]
        for(j=0;j<val;j++)
        {
            if(i==j)
            {
                arr2.push(1)
            }
            else
            {
                arr2.push(0)
            }
        }
        arr1.push(arr2)
            
    }
    console.log(arr1)

    return arr1
}

const a=Identity(5)

