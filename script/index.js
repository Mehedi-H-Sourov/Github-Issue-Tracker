
const form = document.getElementById("sign-in-btn");

form.addEventListener("click", function (event) {

    const username = document.getElementById("sign-in-name").value;
    const password = document.getElementById("sign-in-password").value;

    // validation
    if (username == "admin" && password == "admin123") {

        // redirect to issues page
        window.location.href ="../issues.html";

    } else {
        alert("Invalid username or password");
    }
});