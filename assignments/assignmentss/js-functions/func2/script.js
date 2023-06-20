const reverse = (x)=>{
    r=x.toString().split('').reverse().join('')
    r1=r.split(' ')
    // console.log(r1.join(''))
    return(r1.join(''))
}
x=prompt()
x1=x.split(' ').join('')
console.log(x1)
k=reverse(x)
console.log(k)
if(k==x1)
{
    console.log('It is a palindrome')
}
else{
    console.log('It is not a palindrome')
}

