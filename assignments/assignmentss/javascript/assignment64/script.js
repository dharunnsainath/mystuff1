const str1=prompt("enter the text")
const str2=prompt("enter the text")


const strcon = str1+str2

l1=str1.length
l2=str2.length

if(l1>l2)
{
  k1=l1
  k2=l2
}
else if(l2>l1)
{
  k1=l2
  k2=l1
}

if(l1==l2)
{
  console.log(strcon)
}

if(l1!=l2)
{
  k=k2*2-(k2-k1)
  console.log(k2,k1)
  console.log(strcon.substring(0,k-1))
}