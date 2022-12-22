const urlAtual = window.location.href
const urlClass = new URL(urlAtual)
const id = urlClass.searchParams.get("id")
const feed = document.querySelector('.feed .container-grid')
const feedComments = document.querySelector('.feedback-comments .container-grid')
const h2 = document.querySelector('.feedback-comments .container-grid h2')

fetch('data.json').then((response) => {
    response.json().then((dados) => {
        dados.productRequests.map((message) => {
            if (message.id == id) {
                let replies = []
                if ('comments' in message) {
                    let totalComments = 0
                    let comments = message.comments
                    replies.push(comments)
                    for (let comment of comments) {
                        if ('replies' in comment) {
                            totalComments += comment.replies.length
                            replies.push(comment.replies)
                        }
                    }
                    totalComments += comments.length
                    h2.innerHTML = `${totalComments} Comments`
                    feed.innerHTML = 
                    `
                    <div class="comment">
                        <div class="upvote">
                            <img src="assets/shared/icon-arrow-up.svg" alt aria-hidden="true">
                            <p>${message.upvotes}</p>
                        </div>
                        <div class="comment-content">
                            <h2>${message.title}</h2>
                            <p>${message.description}</p>
                            <div>
                                <div class="category">
                                    <P>${message.category}</P>
                                </div>
                            </div>
                        </div>
                        <a class="comments">
                            <img src="assets/shared/icon-comments.svg" alt aria-hidden="true">
                            <p>${totalComments}</p>
                        </a>
                    </div>
                    `
                    let o = 0
                    for (let c of replies) {
                        for (let realComent of c) {
                            if (realComent.id) {
                                if (replies[0][o].replies) {
                                    feedComments.innerHTML += 
                                    `
                                    <div class="feedback-comment">
                                        <header>
                                            <img src="${realComent.user.image}" alt="profile image of ${realComent.user.name}">
                                            <div class="user">
                                                <h3>${realComent.user.name}</h3>
                                                <h4>${realComent.user.username}</h4>
                                            </div>
                                            <p class="reply">Reply</p>
                                        </header>
                                        <div class="feedback-comment-content">
                                            <p>${realComent.content}</p>
                                            <div class="replies">
                                    `
                                    for (let f = 0; f < replies[0][o].replies.length; f++) {
                                        feedComments.lastChild.lastChild.lastChild.innerHTML += 
                                        `
                                        <div class="replie">
                                            <header>
                                                <img src="${replies[0][o].replies[f].user.image}" alt="profile image of ${replies[0][o].replies[f].user.name}">
                                                <div class="user">
                                                    <h3>${replies[0][o].replies[f].user.name}</h3>
                                                    <h4>${replies[0][o].replies[f].user.username}</h4>
                                                </div>
                                                <p class="reply">Reply</p>
                                            </header>
                                            <div class="replie-content">
                                                
                                                <p><span class="reply-to">${replies[0][o].replies[f].replyingTo}</span> ${replies[0][o].replies[f].content}</p>
                                            </div>
                                        </div>
                                        `
                                    }
                                    feedComments.innerHTML +=
                                    `
                                            </div>
                                        </div>
                                    </div>
                                    `
                                } else {
                                    feedComments.innerHTML += 
                                    `
                                    <div class="feedback-comment">
                                        <header>
                                            <img src="${realComent.user.image}" alt="profile image of ${realComent.user.name}">
                                            <div class="user">
                                                <h3>${realComent.user.name}</h3>
                                                <h4>${realComent.user.username}</h4>
                                            </div>
                                            <p class="reply">Reply</p>
                                        </header>
                                        <div class="feedback-comment-content">
                                            <p>${realComent.content}</p>
                                        </div>
                                    </div>
                                    `
                                }
                            }
                            o++
                        }
                    }
                } else {
                    feed.innerHTML += 
                    `
                    <div class="comment">
                        <div class="upvote">
                            <img src="assets/shared/icon-arrow-up.svg" alt aria-hidden="true">
                            <p>${message.upvotes}</p>
                        </div>
                        <div class="comment-content">
                            <h2>${message.title}</h2>
                            <p>${message.description}</p>
                            <div>
                                <div class="category">
                                    <P>${message.category}</P>
                                </div>
                            </div>
                        </div>
                        <a href="feedback-detail.html?title=${message.title}" class="comments">
                            <img src="assets/shared/icon-comments.svg" alt aria-hidden="true">
                            <p class="zero-comments">0</p>
                        </a>
                    </div>
                    `
                    h2.parentElement.parentElement.remove()
                }
            }
        })
    })
})

// form 
const form = document.querySelector('form')

form.addEventListener('submit', e => {
    e.preventDefault()
    console.log(form.textarea.value)
    location.href = `../add-comment?id=${id}&text=${form.textarea.value}`
})