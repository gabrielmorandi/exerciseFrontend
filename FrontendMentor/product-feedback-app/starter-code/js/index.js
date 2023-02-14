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
const suggest = document.querySelector('.totalSuggestions')
var i = 0
var categoryActive = document.querySelector('.category-active p')
menu(btnOpenMenu, btnCloseMenu, asideContent, html, sort, sortActive, sortArrowDown, sortArrowUp, i, sortLi, sortByP, feed)


// feed
attFeed(feed, categoryActive.innerHTML, 'Most Upvotes', suggest)

// category selector
const categories = document.querySelectorAll('.category')
categorySelector(categories, feed, sortByP)

// total suggestions
// suggest.innerHTML = `${}`
// console.log(suggest.innerHTML)

// upvote
if (localStorage.getItem('commentName') === null) {
    localStorage.setItem('commentName', '[]')
}

// test upvote
if (localStorage.getItem('commentName') === null) {
    console.log('aaa')
} else {
    console.log('mmmm')
    let v = localStorage.getItem('commentName')
    console.log(v)
}
