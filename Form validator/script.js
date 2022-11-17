const myForm = document.querySelector('.form')
const nameInput = document.querySelector('#username')
const mailInput = document.querySelector('#email')
const password = document.querySelector('#password')
const confPass = document.querySelector('#confirm-password')
const submit = document.querySelector('#btn')
const input =document.querySelectorAll('input')


//error function
function showError(input,msg){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small =formControl.querySelector('small')
    small.innerText = msg;
}

//success function
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//email validation
function isValidEmail(email){
    const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email.value.trim())){
        showSuccess(email)
    }else{
        showError(email,`E-mail is not valid`)
    }
}
function getFeildName(name){
    return name.charAt(0).toUpperCase()+name.slice(1,name.length)
}

//element check
function checkRequired(inputArr){
    inputArr.forEach((input) =>  {
        if(input.value.trim() === ''){
            showError(input,  `${getFeildName(input.id)} is required`)
        }else{
            showSuccess(input)
        }
    });
}

//check input length
function checkLength(inputValue,min,max){
    if(inputValue.value.length<min || inputValue.value.length>max){
        showError(inputValue, `${getFeildName(inputValue.id)} should be between ${min} to ${max} characters`)
    }else{
        showSuccess(inputValue)
    }
}

//check password match
function checkPasswordMatch(password,confirmPassword){
    if(password.value === confirmPassword.value){
        if(confirmPassword.value === ''){
            showError(confirmPassword,`${getFeildName(input.id)} is required`)
        }
        showSuccess(confirmPassword)
    }else{
        showError(confirmPassword, `Password not matched`)
    }
}

submit.addEventListener('click', (e) => {
    e.preventDefault()
    checkRequired([nameInput,mailInput,password,confPass])
    checkLength(nameInput,4,12);
    checkLength(password,6,12);
    isValidEmail(mailInput)
    checkPasswordMatch(password,confPass)
    
})
input.forEach((myInput)=>{
    myInput.addEventListener("focus",(e) => {
        myInput.parentElement.classList.add('activated')
    })
}) 

input.forEach((myInput)=>{
    myInput.addEventListener("focusout",(e) => {
        myInput.parentElement.classList.remove('activated')
    })
}) 

