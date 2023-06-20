const coins=(num)=>{

    let r=num
    let t25=0,t10=0,t5=0,t2=0,t1=0
    while(1)
    {
       if(r>=25)
       {
        t25=parseInt(r/25)
        
        r=r-t25*25
        if(r==0)
        {
         break
        }
       }


       if(r>=10)
       {
        t10=parseInt(r/10)
        r=r-t10*10
        if(r==0)
        {
         break
        }
       }

       if(r>=5)
       {
        t5=parseInt(r/5)
        r=r-t5*5
        if(r==0)
        {
         break
        }

       }
      
      
       

       if(r>=2)
       {
        t2=parseInt(r/2)
        r=r-t2*2
        if(r==0)
        {
         break
        }
       }
      

       if(r==1)
       {
        t1=r;
        break;
       }
       
       
    }

    console.log(t25,t10,t5,t2,t1)

}

coins(46)