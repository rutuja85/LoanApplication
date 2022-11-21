const form = document.getElementById('form');
const otp1 = document.getElementById('otp1');
const OTP = document.getElementById('OTP');

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
 const validateInputs=() => {
    const usernameValue = otp1.value.trim();
    const emailValue = OTP.value.trim();
    
    if(usernameValue === '') {
        setError(otp1, 'Username is required');
    } else {
        setSuccess(otp1);
    }
};



const codes = document.querySelectorAll('.code')
codes[0].focus()
codes.forEach((code,idx)=>{
    code.addEventListener('keydown',(e)=>{
        if(e.key >=0 && e.key<=9){
            codes[idx].value=''
            setTimeout(()=>codes[idx+1].focus(),10)

        }
        else if(e.key==='backspace'){
            setTimeout(()=>codes[idx-1].focus(),10)
        }
    })
})

