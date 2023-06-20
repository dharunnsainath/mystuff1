var signinForm=document.getElementById('signinForm')

var item = localStorage.getItem('credentials' );
var itemParsed=JSON.parse(item)


signinForm.addEventListener('submit', function(event) {

    event.preventDefault(); // Prevent form submission

    
    
    // Get form data
    
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;

    console.log(email,password)

    

    var item = localStorage.getItem('credentials' );
    var itemParsed=JSON.parse(item)
    console.log(item)

    if(itemParsed.email==email && itemParsed.password==password)
    {
        window.location.href='./mainpage.html'
    }
    else{
        console.log('failure',itemParsed.password)
    }

    signupform.reset()

})