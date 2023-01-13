const form = document.querySelector('#form')
const fname = document.querySelector('#fname')
const lname = document.querySelector('#lname')
const password = document.querySelector('#password')
const email = document.querySelector('#email')
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const inputs = document.querySelectorAll('input')
const submit = document.querySelector('button')

const iconError = document.querySelector('.error')
const errorTwo = document.querySelector('.error-two')
const errorThree = document.querySelector('.error-three')
const errorFour = document.querySelector('.error-four')

const spanError = document.querySelector('.span-error')
const spanErrorSecond = document.querySelector('.span-error-second')
const spanErrorThird = document.querySelector('.span-error-third')
const spanErrorFourth = document.querySelector('.span-error-fourth')


form.addEventListener('submit', (event) =>{
    event.preventDefault()
    validateFirstName()
    validateLastName()
    validateEmail()
    validatePassword()
})




function validate() {
    fname.style.border = ''
    spanError.style.opacity = -1
    iconError.style.opacity = -1
}
function setError() {
    fname.style.border = '1px solid #e63636'
    spanError.style.opacity = 1
    iconError.style.opacity = 1
}


function validateFirstName() {
    if (fname.value === '') {
        setError()
    } else {
        validate()
    }
}


function validateLastName() {
    if (lname.value === '') {
        spanErrorSecond.style.opacity = 1
        errorTwo.style.opacity = 1
        lname.style.border = '1px solid #e63636'
    }
    else {
        spanErrorSecond.style.opacity = -1
        errorTwo.style.opacity = -1
        lname.style.border = ''
    }
}


function validateEmail() {
    if (!emailRegex.test(email.value)) {
        spanErrorThird.style.opacity = 1
        errorThree.style.opacity = 1
        email.style.border = '1px solid #e63636'
    }
    else {
        spanErrorThird.style.opacity = -1
        errorThree.style.opacity = -1
        email.style.border = ''
    }
}


function validatePassword() {

    if (password.value.length < 6) {
        spanErrorFourth.style.opacity = 1
        errorFour.style.opacity = 1
        password.style.border = '1px solid #e63636'
    }

    else {
        spanErrorFourth.style.opacity = -1
        errorFour.style.opacity = -1
        password.style.border = ''
    }
}
