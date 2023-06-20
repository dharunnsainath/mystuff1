const data={
    name:'Dharun',
    age:24,
    height: 178,
    color: 'brown'
}

const arr=[]
for (d in data)
{
    arr.push([d,data[d]])
}

console.log(arr)
