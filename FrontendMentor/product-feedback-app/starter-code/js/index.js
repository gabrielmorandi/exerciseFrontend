import { menu, categorySelector } from "./menu.js"
import { attFeed } from "./feed.js"

// menu
const btnOpenMenu = document.querySelector('.btn-open-menu')
const btnCloseMenu = document.querySelector('.btn-close-menu')
const asideContent = document.querySelector('.aside-content')
const html = document.querySelector('html')
const sort = document.querySelector('.sort-by')
const sortActive = document.querySelector('.sort-by-active')
const sortLi = document.querySelectorAll('.sort-by-active ul li')
const sortByP = document.querySelector('.sort-by p .sort-span')
const sortArrowUp = document.querySelector('.sort-arrow-up')
const sortArrowDown = document.querySelector('.sort-arrow-down')
const feed = document.querySelector('.feed .container-grid')
var i = 0
var categoryActive = document.querySelector('.category-active p')
menu(btnOpenMenu, btnCloseMenu, asideContent, html, sort, sortActive, sortArrowDown, sortArrowUp, i, sortLi, sortByP, feed)


// feed
attFeed(feed, categoryActive.innerHTML, 'Most Upvotes')

// category selector
const categories = document.querySelectorAll('.category')
categorySelector(categories, feed, sortByP)

// upvote
if (localStorage.getItem('commentName') === null) {
    localStorage.setItem('commentName', '[]')
}
