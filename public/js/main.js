const homepageInput = document.querySelectorAll('.homepageInput')
const glassImages = document.querySelectorAll('.glassImage')
const bookmark = document.querySelectorAll('.toolTip')
const cards = document.querySelectorAll('.card')

Array.from(homepageInput).forEach((element)=>{
    element.addEventListener('focusin', lightUpInput)
})
Array.from(homepageInput).forEach((element)=>{
    element.addEventListener('focusout', turnOffInput)
})

Array.from(glassImages).forEach((element)=>{
    element.addEventListener('error', replaceImage)
})

Array.from(bookmark).forEach((element)=>{
    element.addEventListener('click', bookmarkCard)
})

// Turn on and off lights on homepage
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

// Set default images
function replaceImage(event) {
    event.target.src = "images/default.png"
    event.target.alt = "Default glass image"
    event.onerror = null
}

// Add and remove bookmarks from localStorage
function bookmarkCard(event) {
    const id = this.id
    if (localStorage.hasOwnProperty(id)) {
        localStorage.removeItem(id)
        this.parentNode.parentNode.classList.remove('neon')
        this.style.color = 'var(--accent)'
    }
    else {
        localStorage.setItem(id, id)
        this.parentNode.parentNode.classList.add('neon')
        this.style.color = 'var(--neon)'
    }
    
}

// Check if ID is in localStorage. If so, add neon class
checkBookmarks()

function checkBookmarks() {
    const cardArray = Array.from(cards)
    cardArray.forEach(card => {
        if (localStorage.hasOwnProperty(card.childNodes[1].childNodes[3]?.id) == true) {
            card.classList.add('neon')
        }
    })
}

// const inputText = document.querySelector('#inputText')

// const inputSubmitQuery = document.querySelector('#inputSubmitQuery')
// inputSubmitQuery.addEventListener('click', inputSearch)

// const inputSubmitRandom = document.querySelector('#inputSubmitRandom')

// async function inputSearch() {
//     const queryParameter = inputText.value.toLowerCase()

//     try {
//         const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${queryParameter}`)
//         const data = await response.json()
//         const data2 = await fetch('deleteRapper', {
//             method: 'delete',
//             headers: {'Content-Type': 'application/json'}
//             })
//           })
        
//     }
//     catch(error) {
//         console.log(error)
//     }
// }