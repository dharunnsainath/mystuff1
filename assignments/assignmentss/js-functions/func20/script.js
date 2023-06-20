function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }


console.log(makeid(8))function subset(arra, arra_size)
{
   var result_set = [], 
       result;
   
  
for(var x = 0; x < Math.pow(2, arra.length); x++)
 {
   result = [];
   i = arra.length - 1; 
    do
     {
     if( (x & (1 << i)) !== 0)
         {
            result.push(arra[i]);
          }
       }  while(i--);

   if( result.length >= arra_size)
      {
         result_set.push(result);
       }
   }

   return result_set; 
}

console.log(subset([1, 2, 3], 2));
