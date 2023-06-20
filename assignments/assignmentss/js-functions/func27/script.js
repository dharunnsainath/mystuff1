function is_palindrome(str)
{
        let rev=str.split('').reverse().join('')
        return rev==str
}

function longest_palindrome(str)
{
        let max=0
        let maxp='      '
        for(i=0;i<str.length;i++)
        {
                let sub=str.substring(i,str.length)

                for(j=0;j<sub.length;j++)
                {
                        let subsub=sub.substring(0,j)

                        if(subsub.length <=1)
                        {
                                continue
                        }
                        if(is_palindrome(subsub))
                        {
                                if(subsub.length>max)
                                {
                                        maxp=subsub  
                                        max=subsub.length
                                }
                                
                               
                        }
                }
        }


        console.log(maxp,max)

}


longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")