const factors=(num)=>{
    let f=0
    const arr=[]
    for(i=1;i<=Math.floor(num/2);i++)
    {
        if(num%i==0)
        {
            arr.push(i)
            f+=i
        }
    }

    
    if(f==num)
    {
        console.log('perfect number')
    }
    else
    {
        console.log('not a perfect number')
    }
    console.log(arr)
}

factors(26)