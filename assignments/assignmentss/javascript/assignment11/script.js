const celcToFarh=(celc)=>{
    const farh=(9/5)*celc+32
    console.log(`${celc} C is  ${farh} F`)
}

const farhToCelc=(farh)=>{
    const celc=(5/9)*(farh-32)
    console.log(`${farh} F is  ${celc} C`)
}

choice=prompt("enter 1 for celcius to farh and 2 for other")

if(choice==1)
{
    celc=prompt("enter celcius")
    celcToFarh(celc)
}
else{
    farh=prompt("enter farenheit")
    farhToCelc(farh)
}
