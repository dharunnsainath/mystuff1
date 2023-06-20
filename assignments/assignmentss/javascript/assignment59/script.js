const str=prompt("enter the text")

const n=str.length

if(n%2==0)
{
  console.log(str.substring(0,n/2))
}
else
{
  console.log("enter even count")
}

