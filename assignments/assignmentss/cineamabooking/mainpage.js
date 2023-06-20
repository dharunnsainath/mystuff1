
var item = localStorage.getItem('credentials' );
var itemParsed=JSON.parse(item)
var loginlink= document.getElementById('loginlink')
var div1 = document.getElementById('div1')
var div2 = document.getElementById('div2')
var movie_names=document.getElementsByClassName('movie-title')
const boxArray = [...document.getElementsByClassName('movie-title')];

console.log(boxArray[1].innerHTML)

function clickMovie(i)
{ 
  console.log(movie_names[i-1])
  var movie = localStorage.setItem('movie_details',boxArray[i-1].innerHTML)
  

}

function logout()
{
  localStorage.removeItem('credentials')
  localStorage.removeItem('time')
  localStorage.removeItem('movie_details')
}

console.log(itemParsed)

var link = document.getElementById("signinLink");

if (itemParsed) {
    // link.href = "/mainpage.html";
    div1.style.display='none'
    div2.style.display='block'
    
     // Redirect to this URL if condition is true
  } else {
    loginlink.href='/signin.html'
    div1.style.display='block'
    div2.style.display='none'
     // Redirect to this URL if condition is false
  }