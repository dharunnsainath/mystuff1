var signupform= document.getElementById('signupForm')
var name1,email,password;
var k=0

function redirectToMainPage() {
    window.location.href = "mainpage.html";
  }

 

    function validateEmail(email) {
        // Regular expression for email validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      
        return emailRegex.test(email);
      }

      function validateName(name) {
        const nameRegex = /^[a-zA-Z]+$/;
        return nameRegex.test(name);
      }
      




      function validatePassword(password) {
        k=0
        // Criteria for password validation
        const minLength = 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
      
        // Check if the password meets the criteria
        if (password.length < minLength) {
          return false
        }
        if (!(hasUppercase && hasLowercase)) {
          return false;
        }
        if (!hasNumber) {
          return false;
        }
      
        // Password is valid
        
        return true;
      }
      
      

signupform.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // document.getElementById('email-error').style.display='none'
    // document.getElementById('password-error').style.display='none'
    // Get form data
     name1 = document.getElementById('signup-name').value;
     email = document.getElementById('signup-email').value;
     password = document.getElementById('signup-password').value;
    
    if (!validateEmail(email)) {
        // Valid email, submit the form
        document.getElementById('email-error').innerHTML='Enter valid email'
        document.getElementById('email-error').style.display='block'
     
      } 
    else{
        document.getElementById('email-error').style.display='none'
    }

      if(!validatePassword(password)){
        document.getElementById('password-error').style.display='block'
        document.getElementById('password-error').innerHTML='Enter valid password'
      }
      else{
        document.getElementById('password-error').style.display='none'
      }
    

      if(!validateName(name1))
      {
        document.getElementById('name-error').style.display='block'
        document.getElementById('name-error').innerHTML='Enter only characters'
      }
      else
      {
        document.getElementById('name-error').style.display='none'
      }

   
    

const isValidEmail = validateEmail(email);


console.log(isValidEmail,email)
console.log(validatePassword(password),password)
 
if(isValidEmail && validatePassword(password) && validateName(name1))
{
    console.log(name1,email,password)
    var credentials={
        name: name1,
        email: email,
        password: password
    }
    localStorage.setItem('credentials', JSON.stringify(credentials) );

    window.location.href='mainpage.html'
    
}

   
   


    // signupform.reset()
   

})



