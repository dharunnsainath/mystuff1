const today = new Date()

const christmas=new Date("2023-12-25")

const difference= christmas.getTime()-today.getTime()

console.log(difference)

diffDays=Math.floor(difference/(60*60*24*1000))

console.log(`${diffDays} days left for christmas`)