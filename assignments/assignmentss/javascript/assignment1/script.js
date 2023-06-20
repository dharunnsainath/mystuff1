// Get current date and time
const currentDate = new Date();

// Define days of the week
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Get day of the week
const dayOfWeek = daysOfWeek[currentDate.getDay()];

// Get current time
const currentTime = currentDate.toLocaleTimeString();


const time=currentTime.split(':')
const hour=time[0]
const min=time[1]
const sec=time[2]
const clock=sec.split(' ')
console.log(clock)
// Display the current day and time
console.log(`Today is ${hour} ${clock[1].toUpperCase()} ${min} ${clock[0]} `)

