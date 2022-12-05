var form = document.querySelector('form')
var inputName = document.querySelector('input[type=text]')
var inputEmail = document.querySelector('input[type=email]')
var inputTel = document.querySelector('input[type=tel]')
var urll = 'https://www.google.com'

function onpenInNewTab(url) {
    var win = window.open(url, '_blank')
    win.focus()
}

form.addEventListener('submit', function(e) {
    e.preventDefault()
    var name = inputName.value
    var email = inputEmail.value
    var tel = inputTel.value

    onpenInNewTab(urll)
})

export {name, email, tel}