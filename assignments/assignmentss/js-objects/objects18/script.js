const data={
    name:'Dharun',
    age:24,
    height: 178,
    color: 'brown'
}
function checkProperty(p)
{
    for (d in data)
    {
        if(d == p)
        return true
    }

    return false
}

console.log(checkProperty('weight'))
