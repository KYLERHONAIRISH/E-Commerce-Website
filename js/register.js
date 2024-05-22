document.addEventListener("DOMContentLoaded", function() {

    var form = document.getElementById("registerForm");
 
    form.addEventListener("submit", function(event) {
       event.preventDefault();
 

       var email = document.getElementById("email").value;
       var password = document.getElementById("password").value;
 

       if (email && password) {

          window.location.href = "login.html";
       } else {

          alert("Please fill out all fields.");
       }
    });
 });
 