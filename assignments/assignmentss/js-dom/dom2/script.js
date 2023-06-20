document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve the form values
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;

  // Do something with the form values
  console.log("First Name: " + firstName);
  console.log("Last Name: " + lastName);
});
