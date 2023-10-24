import { Person } from './Person.js'





const h1 = document.querySelector('main > h1').textContent
console.log(h1)

const event1 = document.querySelector('button#event1')
const receptor = document.querySelector('p#receptor')
const list = document.querySelector('#list')

let count = 1;

event1.addEventListener('click', () => {
    receptor.textContent = "ATTAQUE SURPRISE"
    const unLI = document.createElement('li')
    unLI.textContent =`ATTACK ${count++}`
    unLI.addEventListener('click', () => {
        console.log('ATTAQUE SPECIALE n ' + count);
    })
    list.appendChild(unLI)
})





//setTimeout(() => {
//    event1.textContent = "BOOOOOOM"
//}, 2000)