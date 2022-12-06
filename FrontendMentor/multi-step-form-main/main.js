sessionStorage.removeItem("check")

const form = document.querySelector('#form')
const btn = document.querySelector('button')
const arc = document.querySelector('.arc')
const adv = document.querySelector('.adv')
const pro = document.querySelector('.pro')
var checkbox = document.querySelector('input[type=checkbox]')

var check = false
var radio = form.option.value

checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
        arc.innerHTML = '$90/yr <br><span class="yearspan">2 months free</span>'
        adv.innerHTML = '$120/yr <br><span class="yearspan">2 months free</span>'
        pro.innerHTML = '$150/yr <br><span class="yearspan">2 months free</span>'
        check = true
        sessionStorage.setItem("check", check)
    } else {
        arc.innerHTML = '$9/mo'
        adv.innerHTML = '$12/mo'
        pro.innerHTML = '$15/mo'
        sessionStorage.removeItem("check")
    }
})

btn.addEventListener('click', () => {
    var radio = form.option.value
    sessionStorage.setItem("radio", radio)
})