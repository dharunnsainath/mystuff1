str=prompt("enter the text")
vowels=['a','e','o','u','i']
stri=str.toLowerCase().split('')

count=0
for(i=0;i<stri.length;i++)
{
  console.log(stri[i])
  if (vowels.includes(stri[i])) {
    count++;
    
    
  }
}


console.log(`${count} number of vowels`)