
var name1=localStorage.getItem('credentials')

var name1p=JSON.parse(name1)['name']




var time=localStorage.getItem('time')

var movie_details = localStorage.getItem('movie_details')

console.log(name1p,time,movie_details)

var name1pp=document.getElementById('name')
var timep=document.getElementById('time')
var movieName=document.getElementById('movie-name')

name1pp.textContent=`Hi ${name1p}`
movieName.innerHTML=`Your movie is ${movie_details}`
timep.innerHTML = `Your movie time is ${time}`

function logout()
{
  localStorage.removeItem('credentials')
  localStorage.removeItem('time')
  localStorage.removeItem('movie_details')
}

function printt()
{
    window.print()
}