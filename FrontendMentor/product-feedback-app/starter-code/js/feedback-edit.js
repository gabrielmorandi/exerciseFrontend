const urlAtual = window.location.href
const urlClass = new URL(urlAtual)
const title = urlClass.searchParams.get("title")
const divMain = document.querySelector('main > div')
const categoyArray = ['ui', 'ux', 'enhancement', 'bug', 'feature']
const statusArray = ['planned', 'in-progress', 'live', 'suggestion']



fetch('data.json').then((response) => {
    response.json().then((dados) => {
        dados.productRequests.map((message) => {
            if (message.title === title) {

                function checkCategory(element) {
                    return element === message.category
                }
                const messageCategory = categoyArray.findIndex(checkCategory)
                let optionsCategory = 
                `
                    <option value="${categoyArray[messageCategory]}" selected>${categoyArray[messageCategory]}</option>
                `
                categoyArray.splice((messageCategory), 1)
                for (let o = 0; o < categoyArray.length; o++) {
                    optionsCategory += 
                    `
                        <option value="${categoyArray[o]}">${categoyArray[o]}</option>
                    `
                }

                function checkStatus(element) {
                    return element === message.status
                }
                const messageStatus = statusArray.findIndex(checkStatus)
                let optionsStatus = 
                `
                    <option value="${statusArray[messageStatus]}" selected>${statusArray[messageStatus]}</option>
                `
                statusArray.splice((messageStatus), 1)
                for (let u = 0; u < statusArray.length; u++) {
                    optionsStatus += 
                    `
                        <option value="${statusArray[u]}">${statusArray[u]}</option>
                    `
                }
                
                divMain.innerHTML = 
                `
                    <form action="index.html">
                        <h2>Editing ‘${message.title}’</h2>
                        <label>
                            <h3>Feedback Title</h3>
                            <small>Add a short, descriptive headline</small>
                            <input type="text" name="feedbackTitle" placeholder="${message.title}">
                        </label>
                        <label>
                            <h3>Category</h3>
                            <small>Choose a category for your feedback</small>
                            <select name="Category">
                                ${optionsCategory}
                            </select>
                        </label>
                        <label>
                            <h3>Update Status</h3>
                            <small>Change feature state</small>
                            <select name="Status">
                                ${optionsStatus}
                            </select>
                        </label>
                        <label>
                            <h3>Feedback Detail</h3>
                            <small>Include any specific comments on what should be improved, added, etc</small>
                            <textarea name="feedbackDetail" rows="4" placeholder="${message.description}"></textarea>
                        </label>
                        <div class="btn-primary">
                            <div class="btn-purple">
                                <input type="submit" value="Save Changes">
                            </div>
                            <div class="btn-dark-blue">
                                <button>Cancel</button>
                            </div>
                            <div class="btn-red">
                                <button>Delete</button>
                            </div>
                        </div>
                    </form>
                `
            }
        })
    })
})
