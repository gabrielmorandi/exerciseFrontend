const form = document.querySelector('form')
const fields = document.querySelectorAll('[required]')

function validateField(field) {
    function verifyErrors() {
        let foundError = false
        for (let error in field.validity) {
            if(field.validity[error] && !field.validity.valid) {
                foundError = error
            }
        }
        return foundError
    }
    function customMessage(typeError) {
        const messages = {
            text: {
                valueMissing: "Can't be empty " + '<img src="./assets/contact/desktop/icon-error.svg" alt aria-hidden="true">'
            },
            email: {
                valueMissing: "Can't be empty" + '<img src="./assets/contact/desktop/icon-error.svg" alt aria-hidden="true">',
                typeMismatch: "Invalid email" + '<img src="./assets/contact/desktop/icon-error.svg" alt aria-hidden="true">'
            }, 
            tel: {
                valueMissing: "Can't be empty" + '<img src="./assets/contact/desktop/icon-error.svg" alt aria-hidden="true">'
            }
        }
        return messages[field.type][typeError]
    }
    function setCustomMessage(message) {
        const spanError = field.parentNode.querySelector('span.error')
        if (message) {
            spanError.classList.add('active')
            spanError.innerHTML = message
        } else {
            spanError.classList.remove('active')
            spanError.innerHTML = ''
        }
    }
    return function() {
        const error = verifyErrors()
        if(error) {
            const message = customMessage(error)
            setCustomMessage(message)
        } else {
            setCustomMessage('')
        }
    }
}

function customValidation(e) {
    e.preventDefault()
    const field = e.target
    
    const validation = validateField(field)
    validation()

}

for (field of fields) {
    field.addEventListener('invalid', e => {
        e.preventDefault()
        customValidation(e)
    })
    field.addEventListener('blur', customValidation)
}

form.addEventListener('submit', e => {
    console.log('ok')

    e.preventDefault()
})