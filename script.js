const form = document.getElementById('form')
const email = document.getElementById('email')

// listening the submit event on form
form.addEventListener('submit', e => {
    e.preventDefault()
    const emailValue = email.value

    if(emailValue === '' || !validateEmail(emailValue)) {
        form.className = 'form error' // change class name on form
    } else {
        form.className = 'form success' // change class name on form
    }
})
// function with REGEX for email validation...
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
}