// selectors
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".desktop-menu");
const html = document.querySelector("html")
var a = document.querySelectorAll(".a-menu")

// open sidebar
menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
    html.style.overflow = "hidden"
    
    // close sidebar
    for (let i = 0; i < a.length; ++i) {
        a[i].addEventListener('click', () => {
            menu.style.display = 'none';
            closeBtn.style.display = 'none';
            menuBtn.style.display = 'block';
            html.style.overflow = "scroll"
        })
    }
})
  
// close sidebar
closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'block';
    html.style.overflow = "scroll"
})



