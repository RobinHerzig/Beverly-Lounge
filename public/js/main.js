const bookmarkCard = document.querySelectorAll('.fa-solid fa-bookmark')

document.querySelector('#input').addEventListener('focusin', lightUpInput)
document.querySelector('#input').addEventListener('focusout', turnOffInput)

Array.from(bookmarkCard).forEach((element)=>{
    element.addEventListener('click', makeBookmarkCard)
})

function lightUpInput() {
    console.log('The input is focused.')
    document.querySelector('#neonText').style.color = 'var(--neon)'
    document.querySelector('#neonText').style.textShadow = '0 0 0.2em var(--white), 0 0 0.5em var(--neon)'
}

function turnOffInput() {
    console.log('The input is unfocused.')
}

function makeBookmarkCard() {
    console.log('Bookmark clicked')
    // Array.from(unbookmarkCard).element[0].classList.remove('hidden')
    // const id = info.drinks[i].idDrink
    // console.log(id)
}