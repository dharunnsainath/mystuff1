str='helloz'

stra=str.split('')

// String.fromCharCode(my_string.charCodeAt(my_string.length - 1) + 1)



const stra1=[]

for(i=0;i<stra.length-1;i++)
{
    const s = String.fromCharCode(str.charCodeAt(i) + 1)

    stra1.push(s)
}

console.log(stra1.join(""))

