var form = document.querySelector('form')
var inputName = document.querySelector('input[type=text]')
var inputEmail = document.querySelector('input[type=email]')
var inputTel = document.querySelector('input[type=tel]')

form.addEventListener('submit', function(e) {
    var name = inputName.value
    var email = inputEmail.value
    var tel = inputTel.value
})

export {name, email, tel}