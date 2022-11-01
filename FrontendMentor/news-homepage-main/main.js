// selectors
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".menu-content");
const html = document.querySelector("html")
var a = document.querySelectorAll(".a-menu")
var u = 0
var sheet = ''

// add shadow rule 
var addRule = (function (style) {
    sheet = document.head.appendChild(style).sheet;
    return function (selector, css) {
        var propText = typeof css === "string" ? css : Object.keys(css).map(function (styleDeclaration) {
            return styleDeclaration + ":" + (styleDeclaration === "content" ? "'" + css[styleDeclaration] + "'" : css[styleDeclaration]);
        }).join(";");
        sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
        u++
    };
})(document.createElement("style"));

//  remove shadow rule
function delRule() {
    if (u != 0) {
        sheet.deleteRule(0)
        u--
    }
}

// open sidebar
menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
    html.style.overflow = "hidden"

    addRule(".mobile-menu:before", {
        content: "''",
        display: "block",
        position: "fixed",
        top: "0",
        left: "0",
        width: "40%",
        height: "100vh",
        "background-color": "rgba(0, 0, 25, .5)"
        
    });
    
    // close sidebar
    for (let i = 0; i < a.length; ++i) {
        a[i].addEventListener('click', () => {
            menu.style.display = 'none';
            closeBtn.style.display = 'none';
            menuBtn.style.display = 'block';
            html.style.overflow = "scroll"
            delRule()
        })
    }
})
  
// close sidebar
closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'block';
    html.style.overflow = "scroll";
    delRule()
})