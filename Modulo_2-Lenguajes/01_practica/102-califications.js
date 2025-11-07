/* 
Dada la calificación de alumnos de una clase en forma de objeto, Implementa una función que muestre la media de la clase de forma textual, es decir, siguiendo el sistema de calificación español:

Matrícula de Honor = 10
Sobresaliente = entre 9 y 10
Notable = entre 7 y 9
Bien = entre 6 y 7
Suficiente = entre 5 y 6
Insuficiente = entre 4 y 5
Muy deficiente = por debajo de 4
*/

const eso2o = {
    David: 8.25,
    María: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
}

function averageToText(averageNumber) {
    if (averageNumber === 10) {
        return "Matrícula de Honor";
    } else if (averageNumber < 10 && averageNumber >= 9) {
        return "Sobresaliente";
    } else if (averageNumber < 9 && averageNumber >= 7) {
        return "Notable";
    } else if (averageNumber < 7 && averageNumber >= 6) {
        return "Bien";
    } else if (averageNumber < 6 && averageNumber >= 5) {
        return "Suficiente";
    } else if (averageNumber < 5 && averageNumber >= 4) {
        return "Insuficiente";
    } else if (averageNumber < 4) {
        return "Muy deficiente";
    } else {
        return "Resultado no valido";
    }
}

function printAverage(classResults) {
    let totalResults = 0;
    let count = 0;
    let averageNumber = 0;
    let averageText;

    for (const student in classResults) {
        totalResults += classResults[student];
        count++;
    }

    averageNumber = totalResults/count;
    console.log(averageNumber);
    
    averageText = averageToText(averageNumber);
    return averageText;

}

console.log(printAverage(eso2o));