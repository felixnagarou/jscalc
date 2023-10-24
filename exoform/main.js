
import User from './User.js'


let repertory = []
let usercount = 0;

const formulaire = document.querySelector("form")

formulaire.addEventListener('submit', (event) => {
    event.preventDefault()

    const newUser = new User(
        document.querySelector("input#firstname").value,
        document.querySelector("input#lastname").value,
        document.querySelector("input#email").value,
        document.querySelector("input#password").value
    )
    repertory.push(newUser)
    usercount++;
    for (const user of repertory){
        console.log("Users : " + repertory  + " " + "Count : " + usercount)
    }
    
    console.log(repertory)
})


const displayButton = document.querySelector("#display")
const list = document.querySelector("#list")

displayButton.addEventListener('click', () => {
    const unLi = document.createElement("li")
    let toString =({firstname, lastname, email, password}) => `firstname ${firstname}, lastname ${lastname}, email ${email}, password ${password}`
    for (const user of repertory){
        unLi.textContent = toString(user);
    }
    list.appendChild(unLi)
})









