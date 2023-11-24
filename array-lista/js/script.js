const fruits = [ 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola' ];
const pesca = 'pesca';
let flag = false;

fruits.push(pesca);

for (let i = 0; i < fruits.length; ++i) {
    if ('cocomero'.toLowerCase() === fruits[i].toLowerCase()) flag = true;
}

if (flag) console.log('Trovato! Devo solo preparare il cocktail.')
else console.log('Oh no, devo uscire a comprare il cocomero!')