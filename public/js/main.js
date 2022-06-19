// const deleteCard = document.querySelectorAll('.fa-trash')
// const favoriteCard = document.querySelectorAll('.fa-thumbs-up')

// Array.from(deleteText).forEach((element)=>{
//     element.addEventListener('click', deleteCard)
// })

// Array.from(thumbText).forEach((element)=>{
//     element.addEventListener('click', favoriteCard)
// })

// async function deleteCard(){
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

// async function favoriteCard(){
//     const sName = this.parentNode.childNodes[1].innerText
//     const bName = this.parentNode.childNodes[3].innerText
//     const tLikes = Number(this.parentNode.childNodes[5].innerText)
//     try{
//         const response = await fetch('addOneLike', {
//             method: 'put',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify({
//               'stageNameS': sName,
//               'birthNameS': bName,
//               'likesS': tLikes
//             })
//           })
//         const data = await response.json()
//         console.log(data)
//         location.reload()

//     }catch(err){
//         console.log(err)
//     }
// }





// // Class that creates an individual window for each object return.
// class CreateWindow {
//     constructor(idDrink, strDrink) {
//         this.idDrink = idDrink
//         this.strDrink = strDrink
//     }
//     cloneTemplate() {
//         // Clone the template
//     }
//     appendTemplate() {
//         // Append drink information to the template
//     }
// }

// // addEventListener to make button work.
// document.querySelector('button').addEventListener('click', getDrink)

// API function
function getDrink(){
    let searchKeyword = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchKeyword}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        for (let i = 0; i <= data.drinks.length; i++) {
            if (data.drinks[i]) {
                let idDrink = data.drinks[i].idDrink
                let strDrink = data.drinks[i].strDrink
                let drink = new CreateWindow(idDrink, strDrink)
                console.log(drink) // Classes are logged, so it's working here.
            }
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

// for (let ii = 0; data.drinks[i]['strIngredient' + ii]; ii++) {
//     data.drinks[i]['strIngredient' + ii] data.drinks[i]['strMeasure' + ii]
// }

// // I want to create a new window for every drink returned.
// // Each drink can be a class. Inside the class is the code to create the window and append the data.
// // Create a class for each object inside the array inside an object.
// // Data is an object containing an array of objects.
