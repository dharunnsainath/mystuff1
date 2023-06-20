var b1 = document.getElementsByClassName('button-main1')[0]
var div1 = document.getElementsByClassName('main1-c')[0]

// document.getElementsByClassName('main1-c')[0].style.backgroundColor='green'



// function toggleColor()
// {
//     var currentColor = div1.style.backgroundColor;
    

//     if (currentColor === "white" || currentColor === "") {
//       div1.style.backgroundColor = "black";
//       b1.style.backgroundColor='black'
//       div1.style.color='white'
//       b1.style.color='white' // Change to the desired color
//     } else {
//         div1.style.backgroundColor = "white";
//       b1.style.backgroundColor='white'
//       div1.style.color='black'
//       div.style.color='black'
//     }

   
// }

function toggleColor(button) {
    var div = button.parentNode;
    // div.classList.toggle('highlight');
    if (div.classList.contains('highlight')) {
        div.classList.remove('highlight');
        button.style.backgroundColor='black'
        button.style.color='white'
        
      } else {
        div.classList.add('highlight');
        button.classList.add('highlight')
       
        button.style.backgroundColor='white'
        button.style.color='black'
      }
  }

var name1,email,message;
function formClick()
{
  name1 = document.getElementById('name1')
  email = document.getElementById('email1')
  message = document.getElementById('message')

  var data = {
    'name':name1.value,
    'email':email.value,
    'message': message.value
  
  
  }

  localStorage.setItem('data',JSON.stringify(data))

  name1.value='';
  email.value='',
  message.value='';

}

  

console.log(name1,email,message)