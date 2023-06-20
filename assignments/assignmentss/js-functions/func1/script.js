const reverse = (x)=>{
    r=x.toString().split('').reverse().join('')
    
    return parseInt(r)
}
x=32243
k=reverse(x)

console.log(k)