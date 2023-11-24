const numeriCasuali = []
const times = parseInt(prompt('quanti elementi dovrà contenere l\'array'))

for (let i = 0; i < times; ++i) {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    
    numeriCasuali.push(randomNum);
}

const lastElements = numeriCasuali.slice(-5);
console.log(lastElements);

const lastElementsChoice = parseInt(prompt("Quanti degli ultimi elementi vuoi stampare"))

if (lastElementsChoice > 0) console.log(numeriCasuali.slice(-lastElementsChoice))