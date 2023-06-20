const swapcase = (str)=>{

        strcon = str.split('')
        for(let i=0;i<strcon.length;i++)
        {
                if( strcon[i]==strcon[i].toUpperCase())
                {
                        strcon[i]=strcon[i].toLowerCase()
                }
                else
                {
                        strcon[i]=strcon[i].toUpperCase()
                }
        }

        return strcon.join('')

}




console.log(swapcase('AaBbc'));
