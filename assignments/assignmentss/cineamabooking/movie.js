var movieName=localStorage.getItem('movie_details')

var movie_elem= document.getElementById('movie-name')


movie_elem.innerHTML=movieName

function submitTimings()
{
    var form = document.getElementById("movie");
    var selectedOption= form.value;
    console.log(selectedOption)
    localStorage.setItem('time',selectedOption)
    window.location.href='final_output.html'
}