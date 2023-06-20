const prime=(num)=>{
    let f=0
    for(i=2;i<Math.floor(num/2);i++)
    {
        if(num%i==0)
        {
            f=1
            break;
        }
    }

    if(f==1 && f!=2)
    {
        console.log('Not a prime')
    }
    else
    {
        console.log('Prime number')
    }

}

prime(77)