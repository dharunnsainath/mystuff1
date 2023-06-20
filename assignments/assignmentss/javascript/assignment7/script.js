const dateArray=[]

const date=document.getElementById('date')
for(i=2014;i<=2050;i++)
{
    const d = new Date(`${i}-01-01`)
    dateArray.push(d);
}
// console.log(dateArray[0].toString().split(' '))
sundayDates=[]
dateArray.forEach((i)=>
{
    if(i.toString().split(' ')[0]=='Sun')
    {
        const date=document.createElement('div')

        console.log(i.toDateString())
        k=i.toDateString()
        date.innerHTML  =`<p>${k}</p>`
        document.body.append(date)
       
    }
}
)


