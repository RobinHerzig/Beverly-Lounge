console.log('Main.js is working')

const deleteCard = document.querySelectorAll('.fa-solid fa-trash')
const bookmarkCard = document.querySelectorAll('.fa-solid fa-bookmark')
const unbookmarkCard = document.querySelectorAll('.fa-solid fa-bookmark-slash')

Array.from(deleteCard).forEach((element)=>{
    element.addEventListener('click', makeDeleteCard)
})
Array.from(bookmarkCard).forEach((element)=>{
    element.addEventListener('click', makeBookmarkCard)
})
Array.from(unbookmarkCard).forEach((element)=>{
    element.addEventListener('click', makeUnbookmarkCard)
})

// async function makeDeleteCard(){
//     const sName = this.parentNode.childNodes[1].innerText
//     const bName = this.parentNode.childNodes[3].innerText
//     try{
//         const response = await fetch('deleteRapper', {
//             method: 'delete',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify({
//               'stageNameS': sName,
//               'birthNameS': bName
//             })
//           })
//         const data = await response.json()
//         console.log(data)
//         location.reload()

//     }catch(err){
//         console.log(err)
//     }
// }

function makeBookmarkCard() {
    console.log('Bookmark clicked')
    this.classList.add('hidden')
    // Array.from(unbookmarkCard).element[0].classList.remove('hidden')
    // const id = info.drinks[i].idDrink
    // console.log(id)
}