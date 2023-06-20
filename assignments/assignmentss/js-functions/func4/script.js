const alphOrder=(str)=>{
    
    // const arr2=[]
    // const arr3=[]
    // const arr=str.split('')
    // for(i=0;i<=arr.length-1;i++)
    // {
    //     arr2.push(Number(str.charCodeAt(i)))
    // }
    
    // arr2.sort()
    // console.log(arr2)
    // for(i=0;i<arr2.length;i++)
    // {
    //     const character = String.fromCharCode(arr2[i]);
    //     arr3.push(character)

    // }

    // return arr3.join('')
    const arr1=str.split('').sort().join('')
    return arr1
    
    
    // for(i=0;i<=arr.length-1;i++)
    // {
          
    // }
    // return arr



}


console.log(alphOrder('dharun'))