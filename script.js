const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const pan = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

    
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = pan.value.trim();
    const password2Value = password2.value.trim();
    

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

  if(passwordValue === '') {
        setError(pan, 'PAN Number is required');
    } else if (passwordValue.length < 10) {
        setError(pan, 'PAN No. must be at least 8 character.')
    } else {
        setSuccess(pan);
    }
    
    if(password2Value === '') {
        setError(password2, 'Amount is required');
    } else if (password2Value.length>9) {
        setError(password2, "Amount enter maximum 9 number");
        
    } else {
        setSuccess(password2);
        window.location.href="confirm.html";
        
    }
    
   

};

          
