const str= 'The Quick Brown Fox' 
let str1=''
for(i=0;i<str.length;i++)
{
     if(str[i]===str[i].toUpperCase())
     {
          str1+=str[i].toLowerCase()
     }
     else
     {
          str1+=str[i].toUpperCase()
     }
}

console.log(str1)