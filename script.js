function validateForm() {
    let valid = true;

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value;

    // Clear previous errors
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name is required";
        valid = false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerHTML = "Enter valid email";
        valid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters";
        valid = false;
    }

    // Phone validation
    if (phone.length !== 10 || isNaN(phone)) {
        document.getElementById("phoneError").innerHTML = "Enter valid 10-digit phone number";
        valid = false;
    }

    return valid;
}
document.getElementById("myForm").onsubmit = function() {
    if(validateForm()){
        alert("Form submitted successfully!");
    }
    else{
        return validateForm();
    }
};

function togglePassword() {
    let passwordField = document.getElementById("password");
    let type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
}