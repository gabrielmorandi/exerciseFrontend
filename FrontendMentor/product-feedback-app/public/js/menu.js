import { attFeed } from "./feed.js"

export function menu(btnOpenMenu, btnCloseMenu, asideContent, html, sort, sortActive, sortArrowDown, sortArrowUp, i, sortLi, sortByP, feed) {
    // open aside menu
    btnOpenMenu.addEventListener('click', () => {
        btnOpenMenu.style.display = 'none'
        btnCloseMenu.style.display = 'flex'
        asideContent.style.display = 'flex'
        html.style.overflow = 'hidden'
    })
    // close aside menu
    btnCloseMenu.addEventListener('click', () => {
        btnOpenMenu.style.display = 'flex'
        btnCloseMenu.style.display = 'none'
        asideContent.style.display = 'none'
        html.style.overflow = 'scroll'
    })
    // open sort menu and selector
    for(let li of sortLi) {
        li.addEventListener('click', () => {
            for (let l of sortLi) {
                l.classList.remove('li-active')
            }
            li.classList.toggle('li-active')
            sortByP.innerHTML = li.innerText
            let categoryActive = document.querySelector('.category-active p')
            return attFeed(feed, categoryActive.innerText, sortByP.innerText)
        })
    }
    sort.addEventListener('click', () => {
        if (i === 0) {
            i++
            sortArrowDown.style.display = 'none'
            sortArrowUp.style.display = 'flex'
            sortActive.style.display = 'grid'
        } else {
            i--
            sortArrowDown.style.display = 'flex'
            sortArrowUp.style.display = 'none'
            sortActive.style.display = 'none'
        }
    })
}

// category selection
export function categorySelector(categories, feed, sortByP) {
    for (let category of categories) {
        category.addEventListener('click', () => {
            for (let cat of categories) {
                cat.classList.remove('category-active')
            }
            category.classList.toggle('category-active')
            return attFeed(feed, category.innerText, sortByP.innerText)
        })
    }
}