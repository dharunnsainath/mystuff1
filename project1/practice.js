// const obj1={
//     name1: ' Dharun',
//     fun1 : function()
//     {
//         console.log(this.name1+' is doing fine')
//     }
    

    
// }

// const obj2={
//     name1:'Sai'
// }


// obj1.fun1.bind(obj2)()
// const btn =document.getElementById('btn')

// const obj={
//     fun1: function()
//     {
//         console.log('good evening guys')
//     }
// }

// btn.addEventListener('click',obj.fun1
let arr=[]

for(let i=1;i<=5;i++)
{
    let stri=''
    for(let j=i;j>0;j--)
    {
        stri+=j+' '
    }

    if(i!=1)
    {
        for(j=i-1,k=2;j>0;j--,k++)
        {
            stri+=k+' '
        }
        
    }
    // for(let j=i-1,k=1;j>0;j--,k++)
    // {
    //     stri+=k+''
    // }

   
    console.log(stri)
}







