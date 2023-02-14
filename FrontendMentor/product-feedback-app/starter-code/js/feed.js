import { upVote } from "./upvote.js"

class DadosMessage {
    constructor (upvotes, title, description, category, tatalcomments) {
        this.upvotes = upvotes
        this.title = title
        this.description = description
        this.category = category
        this.tatalcomments = tatalcomments
    }
}

export function attFeed(feed, category, sortBy, suggest) {
    fetch('data.json').then((response) => {
        response.json().then((dados) => {
            feed.innerHTML = ''
            var orgMsg = [], totalSuggestions = 0
            dados.productRequests.map((message) => {
                if (category == 'All') {
                    if ('comments' in message) {
                        let totalComments = 0
                        let comments = message.comments
                        for (let comment of comments) {
                            if ('replies' in comment) {
                                totalComments += comment.replies.length
                            }
                        }
                        totalComments += comments.length
                        let objMessage = new DadosMessage(message.upvotes, message.title, message.description, message.category, totalComments)
                        orgMsg.push(objMessage)
                    } else {
                        let objMessage = new DadosMessage(message.upvotes, message.title, message.description, message.category, 0)
                        orgMsg.push(objMessage)
                    }
                }
                else if (category == 'Enhancement') {
                    if (message.category == 'enhancement') {
                        if ('comments' in message) {
                            let totalComments = 0
                            let comments = message.comments
                            for (let comment of comments) {
                                if ('replies' in comment) {
                                    totalComments += comment.replies.length
                                }
                            }
                            totalComments += comments.length
                            let objMessage = new DadosMessage(message.upvotes, message.title, message.description, message.category, totalComments)
                            orgMsg.push(objMessage)
                        } else {
                            let objMessage = new DadosMessage(message.upvotes, message.title, message.description, message.category, 0)
                            orgMsg.push(objMessage)
                        }
                    }
                }
                else if (category == 'Bug') {
                    if (message.category == 'bug') {
                        if ('comments' in message) {
                            let totalComments = 0
                            let comments = message.comments
                            for (let comment of comments) {
                                if ('replies' in comment) {
                                    totalComments += comment.replies.length
                                }
                            }
                            totalComments += comments.length
                            let objMessage = new DadosMessage(message.upvotes, message.title, message.description, message.category, totalComments)
                            orgMsg.push(objMessage)
                        } else {
                            let objMessage = new DadosMessage(message.upvotes, message.title, message.description, message.category, 0)
                            orgMsg.push(objMessage)
                        }
                    }
                }
                else if (category == 'Feature') {
                    if (message.category == 'feature') {
                        if ('comments' in message) {
                            let totalComments = 0
                            let comments = message.comments
                            for (let comment of comments) {
                                if ('replies' in comment) {
                                    totalComments += comment.replies.length
                                }
                            }
                            totalComments += comments.length
                            let objMessage = new DadosMessage(message.upvotes, message.title, message.description, message.category, totalComments)
                            orgMsg.push(objMessage)
                        } else {
                            let objMessage = new DadosMessage(message.upvotes, message.title, message.description, message.category, 0)
                            orgMsg.push(objMessage)
                        }
                    }
                }
                else if (category == 'UI') {
                    if (message.category == 'ui') {
                        if ('comments' in message) {
                            let totalComments = 0
                            let comments = message.comments
                            for (let comment of comments) {
                                if ('replies' in comment) {
                                    totalComments += comment.replies.length
                                }
                            }
                            totalComments += comments.length
                            let objMessage = new DadosMessage(message.upvotes, message.title, message.description, message.category, totalComments)
                            orgMsg.push(objMessage)
                        } else {
                            let objMessage = new DadosMessage(message.upvotes, message.title, message.description, message.category, 0)
                            orgMsg.push(objMessage)
                        }
                    }
                }
                else if (category == 'UX') {
                    if (message.category == 'ux') {
                        if ('comments' in message) {
                            let totalComments = 0
                            let comments = message.comments
                            for (let comment of comments) {
                                if ('replies' in comment) {
                                    totalComments += comment.replies.length
                                }
                            }
                            totalComments += comments.length
                            let objMessage = new DadosMessage(message.upvotes, message.title, message.description, message.category, totalComments)
                            orgMsg.push(objMessage)
                        } else {
                            let objMessage = new DadosMessage(message.upvotes, message.title, message.description, message.category, 0)
                            orgMsg.push(objMessage)
                        }
                    }
                }
                totalSuggestions = orgMsg.length
                suggest.innerHTML = totalSuggestions
            })
            if (sortBy == 'Most Upvotes') {
                orgMsg.sort((a, b) => {
                    if (a.upvotes > b.upvotes) return -1
                    if (a.upvotes < b.upvotes) return 1
                    return 0
                })
            }
            else if (sortBy == 'Least Upvotes') {
                orgMsg.sort((a, b) => {
                    if (a.upvotes > b.upvotes) return 1
                    if (a.upvotes < b.upvotes) return -1
                    return 0
                })
            }
            else if (sortBy == 'Most Comments') {
                orgMsg.sort((a, b) => {
                    if (a.tatalcomments > b.tatalcomments) return -1
                    if (a.tatalcomments < b.tatalcomments) return 1
                    return 0
                })
            }
            else if (sortBy == 'Least Comments') {
                orgMsg.sort((a, b) => {
                    if (a.tatalcomments > b.tatalcomments) return 1
                    if (a.tatalcomments < b.tatalcomments) return -1
                    return 0
                })
            }
            if (orgMsg.length === 0) {
                feed.innerHTML = 
                `
                <div class="no-feedbacks">
                    <img src="assets/suggestions/illustration-empty.svg" alt="No Feedbacks">
                    <h2>There is no feedback yet.</h2>
                    <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
                    <div class="btn-primary btn-purple">
                        <button>+ Add Feedback</button>
                    </div>
                </div>
                `
            } else {
                for (let msg of orgMsg) {
                    if (msg.tatalcomments === 0) {
                        let ancora = msg.title.replace('&', '%26')
                        feed.innerHTML += 
                        `
                        <div class="comment">
                            <div class="upvote">
                                <img src="assets/shared/icon-arrow-up.svg" alt aria-hidden="true">
                                <p>${msg.upvotes}</p>
                            </div>
                            <div class="comment-content">
                                <h2>${msg.title}</h2>
                                <p>${msg.description}</p>
                                <div>
                                    <div class="category">
                                        <P>${msg.category}</P>
                                    </div>
                                </div>
                            </div>
                            <a href="feedback-detail.html?title=${ancora}" class="comments">
                                <img src="assets/shared/icon-comments.svg" alt aria-hidden="true">
                                <p class="zero-comments">${msg.tatalcomments}</p>
                            </a>
                        </div>
                        `
                    } else {
                        let ancora = msg.title.replace('&', '%26')
                        feed.innerHTML += 
                        `
                        <div class="comment">
                            <div class="upvote">
                                <img src="assets/shared/icon-arrow-up.svg" alt aria-hidden="true">
                                <p>${msg.upvotes}</p>
                            </div>
                            <div class="comment-content">
                                <h2>${msg.title}</h2>
                                <p>${msg.description}</p>
                                <div>
                                    <div class="category">
                                        <P>${msg.category}</P>
                                    </div>
                                </div>
                            </div>
                            <a href="feedback-detail.html?title=${ancora}" class="comments">
                                <img src="assets/shared/icon-comments.svg" alt aria-hidden="true">
                                <p>${msg.tatalcomments}</p>
                            </a>
                        </div>
                        `
                    }
                }
            }
        })
    })
    upVote()
}