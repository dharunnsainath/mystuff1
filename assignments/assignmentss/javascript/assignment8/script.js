let x = Math.floor((Math.random() * 10) + 1);
const data = document.createElement('div')
while(1)
{
    const val=prompt("guess")
    if (val == x)
    {   console.log('Correct Guess')
        data.innerHTML='Correct Guess'
        document.body.append(data)
        break;
    }
    else if(val > x)
    {
        data.innerHTML='High'
        document.body.append(data)
        console.log('High')
    }
    else{
        data.innerHTML=' Low'
        document.body.append(data)
        console.log(' Low')
    }
}