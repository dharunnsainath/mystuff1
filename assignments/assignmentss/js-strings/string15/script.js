const humanize = (num)=>{
       let s=''
       if(num%10==1)
       {
              s=num+'st'
       }
       else if(num%10==2)
       {
              s=num+'nd'
       }
       else if(num%10==3)
       {
              s=num+'rd'
       }
       else{
              s=num+'th'
       }
       return s

}




console.log(humanize());
console.log(humanize(1));
console.log(humanize(8));
console.log(humanize(301));
console.log(humanize(402));
