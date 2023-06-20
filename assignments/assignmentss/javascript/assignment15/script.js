const num = prompt("enter number")

diff = num-13

if(diff>13)
{
    console.log(`${(Math.floor(diff))*2}`)
}
else{
    console.log(`${diff}`)
}