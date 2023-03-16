import { upVote } from "./upvote.js"

upVote()

const selectors = document.querySelectorAll('.selector')

// roadmap selection
for (let selector of selectors) {
    selector.addEventListener('click', () => {
        for (clean of selectors) {
            clean.classList.remove('selector-active')
        }
        selector.classList.toggle('selector-active')
        return attRoadmap()
    })
}

const divMain = document.querySelector('main > .container-grid')

let createPlanned = document.createElement('div')
createPlanned.classList.add('planned')
let createInProgress = document.createElement('div')
createInProgress.classList.add('in-progress')
let createLive = document.createElement('div')
createLive.classList.add('live')

function attRoadmap () {
    if (window.innerWidth < 700) {
        fetch('data.json').then((response) => {
            response.json().then((dados) => {
                let selectorActive = document.querySelector('.selector-active')
                divMain.innerHTML = ''
                dados.productRequests.map((message) => {
                    let selectorText = selectorActive.innerText
                    let textSelector = selectorText.split(' ')
                    let status = textSelector[0].toLowerCase()
                    let totalComments = 0
                    if (message.status === status && message.status === 'in-progress') {
                        if ('comments' in message) {
                            let comments = message.comments
                            for (let comment of comments) {
                                if ('replies' in comment) {
                                    totalComments += comment.replies.length
                                }
                            }
                            totalComments += comments.length
                            divMain.innerHTML += 
                            `
                            <div class="comment comment-purple">
                                <div class="stats">
                                    <div class="circle c-purple"></div>
                                    <p>In-Progress</p>
                                </div>
                                <div class="upvote">
                                    <img src="assets/shared/icon-arrow-up.svg" alt="" aria-hidden="true">
                                    <p>${message.upvotes}</p>
                                </div>
                                <div class="comment-content">
                                    <h2>${message.title}</h2>
                                    <p>${message.description}</p>
                                    <div>
                                        <div class="category">
                                            <p>${message.category}</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="feedback-detail.html?title=${message.title}" class="comments">
                                    <img src="assets/shared/icon-comments.svg" alt="" aria-hidden="true">
                                    <p>${totalComments}</p>
                                </a>
                            </div>
                            `
                        } else {
                            totalComments = 0
                            divMain.innerHTML +=
                            `
                            <div class="comment comment-purple">
                                <div class="stats">
                                    <div class="circle c-purple"></div>
                                    <p>In-Progress</p>
                                </div>
                                <div class="upvote">
                                    <img src="assets/shared/icon-arrow-up.svg" alt="" aria-hidden="true">
                                    <p>${message.upvotes}</p>
                                </div>
                                <div class="comment-content">
                                    <h2>${message.title}</h2>
                                    <p>${message.description}</p>
                                    <div>
                                        <div class="category">
                                            <p>${message.category}</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="feedback-detail.html?title=${message.title}" class="comments">
                                    <img src="assets/shared/icon-comments.svg" alt="" aria-hidden="true">
                                    <p class="zero-comments">${totalComments}</p>
                                </a>
                            </div>
                            `
                        }
                        
                    }
                    if (message.status === status && message.status === 'planned') {
                        if ('comments' in message) {
                            let comments = message.comments
                            for (let comment of comments) {
                                if ('replies' in comment) {
                                    totalComments += comment.replies.length
                                }
                            }
                            totalComments += comments.length
                            divMain.innerHTML += 
                            `
                            <div class="comment comment-orange">
                                <div class="stats">
                                    <div class="circle c-orange"></div>
                                    <p>Planned</p>
                                </div>
                                <div class="upvote">
                                    <img src="assets/shared/icon-arrow-up.svg" alt="" aria-hidden="true">
                                    <p>${message.upvotes}</p>
                                </div>
                                <div class="comment-content">
                                    <h2>${message.title}</h2>
                                    <p>${message.description}</p>
                                    <div>
                                        <div class="category">
                                            <p>${message.category}</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="feedback-detail.html?title=${message.title}" class="comments">
                                    <img src="assets/shared/icon-comments.svg" alt="" aria-hidden="true">
                                    <p>${totalComments}</p>
                                </a>
                            </div>
                            `
                        } else {
                            totalComments = 0
                            divMain.innerHTML +=
                            `
                            <div class="comment comment-orange">
                                <div class="stats">
                                    <div class="circle c-purple"></div>
                                    <p>In-Progress</p>
                                </div>
                                <div class="upvote">
                                    <img src="assets/shared/icon-arrow-up.svg" alt="" aria-hidden="true">
                                    <p>${message.upvotes}</p>
                                </div>
                                <div class="comment-content">
                                    <h2>${message.title}</h2>
                                    <p>${message.description}</p>
                                    <div>
                                        <div class="category">
                                            <p>${message.category}</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="feedback-detail.html?title=${message.title}" class="comments">
                                    <img src="assets/shared/icon-comments.svg" alt="" aria-hidden="true">
                                    <p class="zero-comments">${totalComments}</p>
                                </a>
                            </div>
                            `
                        }
                        
                    }
                    if (message.status === status && message.status === 'live') {
                        if ('comments' in message) {
                            let comments = message.comments
                            for (let comment of comments) {
                                if ('replies' in comment) {
                                    totalComments += comment.replies.length
                                }
                            }
                            totalComments += comments.length
                            divMain.innerHTML += 
                            `
                            <div class="comment comment-light-blue">
                                <div class="stats">
                                    <div class="circle c-light-blue"></div>
                                    <p>Live</p>
                                </div>
                                <div class="upvote">
                                    <img src="assets/shared/icon-arrow-up.svg" alt="" aria-hidden="true">
                                    <p>${message.upvotes}</p>
                                </div>
                                <div class="comment-content">
                                    <h2>${message.title}</h2>
                                    <p>${message.description}</p>
                                    <div>
                                        <div class="category">
                                            <p>${message.category}</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="feedback-detail.html?title=${message.title}" class="comments">
                                    <img src="assets/shared/icon-comments.svg" alt="" aria-hidden="true">
                                    <p>${totalComments}</p>
                                </a>
                            </div>
                            `
                        } else {
                            totalComments = 0
                            divMain.innerHTML +=
                            `
                            <div class="comment comment-light-blue">
                                <div class="stats">
                                    <div class="circle c-purple"></div>
                                    <p>In-Progress</p>
                                </div>
                                <div class="upvote">
                                    <img src="assets/shared/icon-arrow-up.svg" alt="" aria-hidden="true">
                                    <p>${message.upvotes}</p>
                                </div>
                                <div class="comment-content">
                                    <h2>${message.title}</h2>
                                    <p>${message.description}</p>
                                    <div>
                                        <div class="category">
                                            <p>${message.category}</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="feedback-detail.html?title=${message.title}" class="comments">
                                    <img src="assets/shared/icon-comments.svg" alt="" aria-hidden="true">
                                    <p class="zero-comments">${totalComments}</p>
                                </a>
                            </div>
                            `
                        }
                        
                    }
                })
            })
        })
    } else {
        divMain.innerHTML = ''
        divMain.appendChild(createPlanned)
        divMain.appendChild(createInProgress)
        divMain.appendChild(createLive)
        let divPlanned = document.querySelector('.planned')
        let divInProgress = document.querySelector('.in-progress')
        let divLive = document.querySelector('.live')
        fetch('data.json').then((response) => {
            response.json().then((dados) => {
                divPlanned.innerHTML = ''
                divInProgress.innerHTML = ''
                divLive.innerHTML = ''
                dados.productRequests.map((message) => {
                    let totalComments = 0
                    if (message.status === 'in-progress') {
                        if ('comments' in message) {
                            let comments = message.comments
                            for (let comment of comments) {
                                if ('replies' in comment) {
                                    totalComments += comment.replies.length
                                }
                            }
                            totalComments += comments.length
                            divInProgress.innerHTML += 
                            `
                            <div class="comment comment-purple">
                                <div class="stats">
                                    <div class="circle c-purple"></div>
                                    <p>In-Progress</p>
                                </div>
                                <div class="upvote">
                                    <img src="assets/shared/icon-arrow-up.svg" alt="" aria-hidden="true">
                                    <p>${message.upvotes}</p>
                                </div>
                                <div class="comment-content">
                                    <h2>${message.title}</h2>
                                    <p>${message.description}</p>
                                    <div>
                                        <div class="category">
                                            <p>${message.category}</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="feedback-detail.html?title=${message.title}" class="comments">
                                    <img src="assets/shared/icon-comments.svg" alt="" aria-hidden="true">
                                    <p>${totalComments}</p>
                                </a>
                            </div>
                            `
                        } else {
                            totalComments = 0
                            divInProgress.innerHTML +=
                            `
                            <div class="comment comment-purple">
                                <div class="stats">
                                    <div class="circle c-purple"></div>
                                    <p>In-Progress</p>
                                </div>
                                <div class="upvote">
                                    <img src="assets/shared/icon-arrow-up.svg" alt="" aria-hidden="true">
                                    <p>${message.upvotes}</p>
                                </div>
                                <div class="comment-content">
                                    <h2>${message.title}</h2>
                                    <p>${message.description}</p>
                                    <div>
                                        <div class="category">
                                            <p>${message.category}</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="feedback-detail.html?title=${message.title}" class="comments">
                                    <img src="assets/shared/icon-comments.svg" alt="" aria-hidden="true">
                                    <p class="zero-comments">${totalComments}</p>
                                </a>
                            </div>
                            `
                        }
                        
                    }
                    if (message.status === 'planned') {
                        if ('comments' in message) {
                            let comments = message.comments
                            for (let comment of comments) {
                                if ('replies' in comment) {
                                    totalComments += comment.replies.length
                                }
                            }
                            totalComments += comments.length
                            divPlanned.innerHTML += 
                            `
                            <div class="comment comment-orange">
                                <div class="stats">
                                    <div class="circle c-orange"></div>
                                    <p>Planned</p>
                                </div>
                                <div class="upvote">
                                    <img src="assets/shared/icon-arrow-up.svg" alt="" aria-hidden="true">
                                    <p>${message.upvotes}</p>
                                </div>
                                <div class="comment-content">
                                    <h2>${message.title}</h2>
                                    <p>${message.description}</p>
                                    <div>
                                        <div class="category">
                                            <p>${message.category}</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="feedback-detail.html?title=${message.title}" class="comments">
                                    <img src="assets/shared/icon-comments.svg" alt="" aria-hidden="true">
                                    <p>${totalComments}</p>
                                </a>
                            </div>
                            `
                        } else {
                            totalComments = 0
                            divPlanned.innerHTML +=
                            `
                            <div class="comment comment-orange">
                                <div class="stats">
                                    <div class="circle c-purple"></div>
                                    <p>In-Progress</p>
                                </div>
                                <div class="upvote">
                                    <img src="assets/shared/icon-arrow-up.svg" alt="" aria-hidden="true">
                                    <p>${message.upvotes}</p>
                                </div>
                                <div class="comment-content">
                                    <h2>${message.title}</h2>
                                    <p>${message.description}</p>
                                    <div>
                                        <div class="category">
                                            <p>${message.category}</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="feedback-detail.html?title=${message.title}" class="comments">
                                    <img src="assets/shared/icon-comments.svg" alt="" aria-hidden="true">
                                    <p class="zero-comments">${totalComments}</p>
                                </a>
                            </div>
                            `
                        }
                        
                    }
                    if (message.status === 'live') {
                        if ('comments' in message) {
                            let comments = message.comments
                            for (let comment of comments) {
                                if ('replies' in comment) {
                                    totalComments += comment.replies.length
                                }
                            }
                            totalComments += comments.length
                            divLive.innerHTML += 
                            `
                            <div class="comment comment-light-blue">
                                <div class="stats">
                                    <div class="circle c-light-blue"></div>
                                    <p>Live</p>
                                </div>
                                <div class="upvote">
                                    <img src="assets/shared/icon-arrow-up.svg" alt="" aria-hidden="true">
                                    <p>${message.upvotes}</p>
                                </div>
                                <div class="comment-content">
                                    <h2>${message.title}</h2>
                                    <p>${message.description}</p>
                                    <div>
                                        <div class="category">
                                            <p>${message.category}</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="feedback-detail.html?title=${message.title}" class="comments">
                                    <img src="assets/shared/icon-comments.svg" alt="" aria-hidden="true">
                                    <p>${totalComments}</p>
                                </a>
                            </div>
                            `
                        } else {
                            totalComments = 0
                            divLive.innerHTML +=
                            `
                            <div class="comment comment-light-blue">
                                <div class="stats">
                                    <div class="circle c-purple"></div>
                                    <p>In-Progress</p>
                                </div>
                                <div class="upvote">
                                    <img src="assets/shared/icon-arrow-up.svg" alt="" aria-hidden="true">
                                    <p>${message.upvotes}</p>
                                </div>
                                <div class="comment-content">
                                    <h2>${message.title}</h2>
                                    <p>${message.description}</p>
                                    <div>
                                        <div class="category">
                                            <p>${message.category}</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="feedback-detail.html?title=${message.title}" class="comments">
                                    <img src="assets/shared/icon-comments.svg" alt="" aria-hidden="true">
                                    <p class="zero-comments">${totalComments}</p>
                                </a>
                            </div>
                            `
                        }
                        
                    }
                })
            })
        })
    }
}

attRoadmap()

// resizer
addEventListener("resize", (event) => {})
onresize = (event) => {}
function reportWindowSize() {
    attRoadmap()
}
window.onresize = reportWindowSize;
