const str=prompt("enter the text")
if(str.length>=6)
{strrep = str.substring(str.length-6,str.length)

if(strrep=='Script')
{
  console.log('True')
  
}
console.log(strrep)

}
else
{
  console.log('length should be greater than or equal to 6')
}