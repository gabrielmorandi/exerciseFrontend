sessionStorage.removeItem("online")
sessionStorage.removeItem("storage")
sessionStorage.removeItem("profile")

const form = document.querySelector('#form')
const btn = document.querySelectorAll('button')
const one = document.querySelector('.one')
const two = document.querySelectorAll('.two')
const year = sessionStorage.getItem("check")

if (year == 'true') {
    one.innerHTML = '+$10/yr'
    two[0].innerHTML = '+$20/yr'
    two[1].innerHTML = '+$20/yr'
}

for (let bt of btn) {
    bt.addEventListener('click', () => {
        if (form.online.checked) {
            sessionStorage.setItem("online", form.online.value)
        }
        if (form.storage.checked) {
            sessionStorage.setItem("storage", form.storage.value)
        }
        if (form.profile.checked) {
            sessionStorage.setItem("profile", form.profile.value)
        }
    })
}
