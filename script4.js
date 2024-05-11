const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});


const setError =(element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success")
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorMessage = inputControl.querySelector(".error");
    errorMessage.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === "") {
        setError(username, "Please provide a name");
    }
    else {
        setSuccess(username);
    }

    if(emailValue === "") {
        setError(email, "Please provide an email");
    }
    else if(!isValidEmail(emailValue)) {
        setError(email, "Provide a valid email");
    }
    else {
        setSuccess(email);
    }

    if(passwordValue === "") {
        setError(password, "Please provide a password");
    }
    else if(passwordValue.length < 8) {
        setError(password, "Password should have at least 8 characters");
    }

    else if(passwordValue === "password" || passwordValue === "Password") {
        setError(password, "Password cannot be password")
    }
    else {
        setSuccess(password);
    }

    if(password2Value === "") {
        setError(password2, 'Password cannot be empty');
    }
    else if(password2Value !== passwordValue) {
        setError(password2, "Passwords do not match");
    }
    else {
        setSuccess(password2);
    }
}; 

const showPassword = document.querySelector(".fa-eye");
showPassword.addEventListener("click", function() {
this.classList.toggle("fa-eye-slash");
const type = password.getAttribute("type") === "password" ? "text" : "password";
password.setAttribute("type", type);
})



