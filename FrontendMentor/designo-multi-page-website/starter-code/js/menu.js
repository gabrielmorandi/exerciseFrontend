const btnMenu = document.querySelector('.btn-menu')
const closeBtnMenu = document.querySelector('.close-btn-menu')
const menu = document.querySelector('.menu')
const html = document.querySelector('html')
const links = document.querySelectorAll(".menu li a")

// open menu
btnMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-on')
    btnMenu.classList.add('display-off')
    closeBtnMenu.classList.add('display-on')
    html.style.overflow = 'hidden'
    menu.style["boxShadow"] = '0 600px 0 600px rgba(0, 0, 0, .5)'
})

// close menu
closeBtnMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-on')
    btnMenu.classList.remove('display-off')
    closeBtnMenu.classList.remove('display-on')
    html.style.overflow = 'scroll'
    menu.style["boxShadow"] = 'none'
})

// close menu after link click
for (let link of links) {
    link.addEventListener('click', () => {
        menu.classList.toggle('menu-on')
        btnMenu.classList.remove('display-off')
        closeBtnMenu.classList.remove('display-on')
        html.style.overflow = 'scroll'
        menu.style["boxShadow"] = 'none'
    })
}