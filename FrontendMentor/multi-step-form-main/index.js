import {User} from './User.js'

const form = document.querySelector('#form')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    let x = new User(form.name.value, form.email.value, form.number.value)
    sessionStorage.setItem("user", JSON.stringify(x))
})