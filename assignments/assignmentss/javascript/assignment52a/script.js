str=prompt("enter the text")

str=str.toLowerCase()
f=0
for(i=0;i<=str.length-3;i++)
{
  if (str[i] === 'a') {
    
    if (str[i + 3] === 'b') {
      f=1
      break;
    }
  }
}


if(f==1)
{
  console.log('True')
}
else
{
  console.log('false')
}