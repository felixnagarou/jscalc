let mysteryGenerator = (threshold) => Math.ceil(Math.random() * threshold)
let numberToGuess = mysteryGenerator(100);

let guessed = -1

console.log(numberToGuess)
console.log(guessed)



//do{
//    guessed = prompt("Entrer un nb entre un et 100");
//    guessed < numberToGuess ? console.log(`Le nombre à deviner est supérieur à ${guessed}`) : 
//    guessed > numberToGuess ? console.log( `Le nombre à deviner est inférieur à ${guessed}`) : 
//    console.log(`Bravo, le nombre était bien ${numberToGuess}`);
//    
//} while (guessed != numberToGuess)


//guessed = prompt("entrer nb entre 1 et 100")

console.log(guessed)
//console.log(guessed > numberToGuess ? 'Moins' : guessed < numberToGuess ? 'Plus' : 'Bingo')


while(guessed !== numberToGuess){
    guessed = +prompt(guessed > numberToGuess ? 'Moins' : guessed < numberToGuess ? 'Plus' : 'Bingo')
}










