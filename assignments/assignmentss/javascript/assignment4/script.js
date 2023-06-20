const triangle = (a,b,c)=>{
    const s=(a+b+c)/2

    const area=(s*(s-a)*(s-b)*(s-c))**0.5

    console.log(`The area is ${area}`)
}

triangle(5,6,7)