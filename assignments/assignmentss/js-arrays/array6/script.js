str=''

for(i=0;i<3;i++)
{
     x=prompt('enter')
     if(i==2)
     {
          str+=x
     }
     else
     {
          str=str+x+'-'
     }
}

console.log(str)
 