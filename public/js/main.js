const input = document.querySelector('#input')
const search = document.querySelector('#search')
const favorites = document.querySelector('#favorites')
const glassImages = document.querySelectorAll('.glassImage')
const bookmark = document.querySelectorAll('.toolTip')

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
    console.log('Bookmark clicked')
    const id = this.id
    if (Storage.includes(id) == false) {
        localStorage.setItem(id, id)
    }
    console.log(localStorage.getItem('ID'))
    const sName = this.parentNode.parentNode.classList.toggle('neon')
    // document.querySelector('.card').classList.toggle('neon')

    // Array.from(unbookmarkCard).element[0].classList.remove('hidden')
    // const id = info.drinks[i].idDrink
    // console.log(id)
}

// onload.checkBookmarks()

// function checkBookmarks() {
//     if ()
// }

