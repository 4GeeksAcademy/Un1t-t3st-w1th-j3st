// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
// declaramos una funcion con el mismo nombre "formEuroToDollar"
const  fromYenToPound = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum,  fromYenToPound }