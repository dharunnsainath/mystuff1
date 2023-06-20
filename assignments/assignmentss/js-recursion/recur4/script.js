function exponent(a,b)
{
	exp=a
	for(i=1;i<b;i++)
	{
		exp*=a
	}

	return exp
}

console.log(exponent(8,3))