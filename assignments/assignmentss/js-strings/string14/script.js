const insertString = (str,ins,pos)=>{

       const splitarr=[str.slice(0,pos),str.slice(pos)]

       const s=splitarr[0]+`${ins}`+splitarr[1]

       return s
       

}




console.log(insertString('We are doing some exercises.','JavaScript ',18));
