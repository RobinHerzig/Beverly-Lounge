const input = document.querySelector('#input')
const search = document.querySelector('#search')
const favorites = document.querySelector('#favorites')
const glassImages = document.querySelectorAll('.glassImage')
const bookmark = document.querySelectorAll('.toolTip')
const cards = document.querySelectorAll('.card')

if (input) {
    input.addEventListener('focusin', lightUpInput)
    input.addEventListener('focusout', turnOffInput)
}
if (search) {
    search.addEventListener('focusin', lightUpInput)
    search.addEventListener('focusout', turnOffInput)
}
if (favorites) {
    favorites.addEventListener('focusin', lightUpInput)
    favorites.addEventListener('focusout', turnOffInput)
}

Array.from(glassImages).forEach((element)=>{
    element.addEventListener('error', replaceImage)
})

Array.from(bookmark).forEach((element)=>{
    element.addEventListener('click', bookmarkCard)
})

function lightUpInput() {
    document.querySelector('#neonText').style.color = 'var(--neon)'
    document.querySelector('#neonText').style.textShadow = '0 0 0.2em var(--white), 0 0 0.5em var(--neon)'
    document.querySelector('#neonReflect').style.opacity = '.5'
}

function turnOffInput() {
    document.querySelector('#neonText').style.color = 'var(--accent)'
    document.querySelector('#neonText').style.textShadow = 'none'
    document.querySelector('#neonReflect').style.opacity = '.1'
}

function replaceImage(event) {
    event.target.src = "images/default.png"
    event.target.alt = "Default glass image"
    event.onerror = null
}

function bookmarkCard(event) {
    const id = this.id
    if (localStorage.hasOwnProperty(id)) {
        localStorage.removeItem(id)
        this.parentNode.parentNode.classList.remove('neon')
        this.style.color = 'var(--accent)'
        console.log('Bookmark removed')
    }
    else {
        localStorage.setItem(id, id)
        this.parentNode.parentNode.classList.add('neon')
        this.style.color = 'var(--neon)'
        console.log('Bookmark added')
    }
    
}

checkBookmarks()

function checkBookmarks() {
    const cardArray = Array.from(cards)
    cardArray.forEach(card => {
        if (localStorage.hasOwnProperty(card.childNodes[1].childNodes[3].id) == true) {
            console.log('Match found!')
            card.classList.add('neon')
        }
    })
}