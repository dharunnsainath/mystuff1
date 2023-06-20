function range(a,b)
{
	let arr=[]
	for(i=a+1;i<b;i++)
	{
		arr.push(i)
	}

	return arr
}

console.log(range(2,9))