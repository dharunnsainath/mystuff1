const nonrepeated = (str)=>{
   
   const arr1=str.split('')
  
   let result=''

   // for(i=0;i<=arr1.length-1;i++)
   // {
   //    console.log(arr1[i])
   //    c=0
   //    // for(j=0;j<=arr1.length-1;i++)
   //    // {
   //    //    if(arr1[i]===arr1[j])

   //    //    {
   //    //       c+=1;
   //    //    }
   //    // }

   //    console.log(c)
   // }
   for(i=0;i<=arr1.length-1;i++)
   {
      c=0
      for(j=0;j<=arr1.length-1;j++)
      {
         if(arr1[i]==arr1[j])
         {
            c+=1
         }
      }
      
   if(c<2)
   {
      result=arr1[i];
      break
   }


   }

   

   return result;


}


console.log(nonrepeated('abacddbec'))