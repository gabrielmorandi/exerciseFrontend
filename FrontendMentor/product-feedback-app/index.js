const express = require('express')
const server = express()
const router = express.Router()
const fs = require('fs')

// crud for json file
server.use(express.json({extended: true}))

const readFile = () => {
    const content = fs.readFileSync('./public/data.json', 'utf-8')
    return JSON.parse(content)
}

const writeFile = (content) => {
    const updateFile = JSON.stringify(content)
    fs.writeFileSync('./public/data.json', updateFile, 'utf-8')
}

// run serv on port 8080
const app = express()

app.use(express.static('public'))

app.get('/add-comment', (req, res) => {
    if (req.query.text) {
        const currentContent = readFile()
        const currentUser = currentContent.currentUser
        const feedbacks = currentContent.productRequests
        let id = req.query.id
        let text = req.query.text
        let b = []
        for (let a of feedbacks) {
            let c = a.comments
            for (let d in c) {
                b.push(d)
            }
        }
        for (let feedb of feedbacks) {
            if (feedb.id == id) {
                feedb.comments.push(
                    {
                        "id": b.length,
                        "content": text,
                        "user": {
                            "image": currentUser.image,
                            "name": currentUser.name,
                            "username":currentUser.username
                        }
                    }
                )
                writeFile(currentContent)
            }
        }
        // res.send(currentUser)
        // res.send(b)
        // res.send(currentContent.productRequests[6].comments)
        // res.send(feedbacks)
        res.redirect(`feedback-detail.html?id=${id}`)
    }
    // writeFile(currentContent)
})

app.listen(8080)
