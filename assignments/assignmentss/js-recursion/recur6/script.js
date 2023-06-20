function fibanocci(num)
{
	if (num == 0)
    {
        return 0; 
    }
    
    else if (num == 1)
    {
        return 1; 
    }
   
    else
    {
        return fibanocci(num - 1) + fibanocci(num - 2); 
    }
	
}

console.log(fibanocci(8))