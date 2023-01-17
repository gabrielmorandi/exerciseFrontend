const selectors = document.querySelectorAll('.selector')

// roadmap selection
for (let selector of selectors) {
    selector.addEventListener('click', () => {
        for (clean of selectors) {
            clean.classList.remove('selector-active')
        }
        selector.classList.toggle('selector-active')
        
    })
}


const selectorActive = document.querySelector('.selector-active')
const divMain = document.querySelector('main > .container-grid')

fetch('data.json').then((response) => {
    response.json().then((dados) => {
        dados.productRequests.map((message) => {
            console.log(selectorActive.innerText)
        })
    })
})
