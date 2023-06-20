const unCamelize = (str,sep='')=>{

       strarr=str.split('')
       let stra1='',stra2=''
       for(i=1;i<=strarr.length;i++)
       {
         if(strarr[i]==strarr[i].toUpperCase())
         {
                stra1=str.substring(0,i)
                stra2=str.substring(i,str.length)
                break;
        }
       }
       
       return stra1+sep+stra2.toLowerCase()

}




console.log(unCamelize('helloWorld','-'));
