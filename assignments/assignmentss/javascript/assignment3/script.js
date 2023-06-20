const currentDate = new Date();


const date=currentDate.toLocaleDateString().split('/')
console.log(date)

const day=date[0]
const month=date[1]
const year=date[2]

console.log(`${day}-${month}-${year}`)
console.log(`${day}/${month}/${year}`)


