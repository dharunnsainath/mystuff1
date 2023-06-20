const year = prompt("enter the year")
body=document.body
const leapYear = (year)=>{
    const text=document.createElement('div')

    if(year%400==0 )
    {
        
        console.log(`${year} is a leap year`)
        text.innerText=`${year} is a leap year`


    }
    if(year%100==0)
    {
        console.log(`${year} is not a leap year`)
        text.innerText= `${year} is not a leap year`

    }
    if(year%4==0)
    {
        console.log(`${year} is a leap year`)
        text.innerText=`${year} is a leap year`


    }
    else{
        console.log(`${year} is not a leap year`)
        text.innerText= `${year} is not a leap year`

    }   

   body.append(text)
}

leapYear(year)