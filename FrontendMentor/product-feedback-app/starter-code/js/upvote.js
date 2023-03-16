class upVoteId {
    constructor (name, upVoted) {
        this.name = name
        this.upVoted = upVoted
    }
}

export function upVote() {
    // upvote
    if (localStorage.getItem('commentName') === null) {
        localStorage.setItem('commentName', '[]')
    }

    setTimeout(() => {
        let upVoteButtons = document.querySelectorAll('.upvote')
        let array1 = JSON.parse(localStorage.getItem('commentName'))
        let array2 = []
        for (let y in array1) {
            array2.push(array1[y].name)
        }
        for (let one of upVoteButtons)  {
            // store
            let a = one.parentElement
            let b = a.children[1].children[0].innerHTML
            if (b === '') {
                b = a.children[2].children[0].innerHTML
            }
            let c = new upVoteId(b, false)
            if (array2.includes(b) === false) {
                array1.push(c)
                localStorage.setItem("commentName", JSON.stringify(array1))
            } else {
                for (let r in array1) {
                    if (b === array1[r].name) {
                        if (array1[r].upVoted === true) {
                            let d = parseInt(one.children[1].innerHTML)
                            d++
                            one.children[1].innerHTML = d
                            one.classList.toggle('upSelect')
                            one.children[0].setAttribute('src', './assets/shared/icon-arrow-up-white.svg')
                        }
                    }
                }
            }

            // click
            one.addEventListener('click', () => {
                for (let t in array1) {
                    if (array1[t].name === b) {
                        if (array1[t].upVoted === true) {
                            array1[t].upVoted = false
                            let d = parseInt(one.children[1].innerHTML)
                            d--
                            one.children[1].innerHTML = d
                        } else {
                            array1[t].upVoted = true
                            let d = parseInt(one.children[1].innerHTML)
                            d++
                            one.children[1].innerHTML = d
                        }
                        localStorage.setItem("commentName", JSON.stringify(array1))
                    }
                }
                one.classList.toggle('upSelect')
                if (one.className.includes('upSelect') === false) {
                    one.children[0].setAttribute('src', './assets/shared/icon-arrow-up.svg')
                } else {
                    one.children[0].setAttribute('src', './assets/shared/icon-arrow-up-white.svg')
                }
            })
        }
    }, 150)
}