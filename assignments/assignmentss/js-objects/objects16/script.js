const data={
    name:'Dharun',
    age:24,
    height: 178,
    color: 'brown'
}

reverse_data={}

for (d in data)
{
    reverse_data[data[d]]=d
}

console.log(reverse_data)