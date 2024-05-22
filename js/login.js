document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email.trim() !== "" && password.trim() !== "") {
        window.location.href = "index.html";
    } else {
        alert("Please fill out both email and password fields.");
    }
});
