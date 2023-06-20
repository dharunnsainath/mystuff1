const uniqueChar=(str)=>{
        ustr=''
        let dic={}
        const stra=str.split('')
       
        
        for(i=0;i<=stra.length;i++)
        {
                if(stra[i]  in dic)
                {
                        dic[stra[i]]+=1   
                }
                else{
                        dic[stra[i]]=1
                }
        }

        for(const [key,value] of Object.entries(dic))
        {
               if(key!=='undefined')
               {
                ustr+=key
               }
        }

        return ustr

}




const str='dharunsainath'


console.log(uniqueChar(str))