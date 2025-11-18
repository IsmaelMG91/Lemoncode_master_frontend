console.log("-----------------------------------------------");
console.log("2. Concat");/**
 * 2. Concat
Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
 */
const numberArray = [1, 3, 5, 6, 8];
const stringArray = ["Juan", "Anna", "Jaime", "Elisabeth"];
const booleanArray = [true, false, true, true];


const concat = (a, b) => {
    const newArray = [...a, ...b];
    return newArray;
};

console.log(concat(numberArray, stringArray));

/**
 * Opcional
Implementa una nueva versión de concat donde se acepten múltiples arrays de entrada (más de 2). No utilices el método Array.prototype.concat.
 */

function concatVariadic() {
    let arrayResult = [];
    for (const arg in arguments) {
        arrayResult = [...arrayResult, ...arguments[arg]]; //arg apunta a la clave/id, no al valor de la propiedad del objeto arguments, con arguments[arg] obtenemos el valor de la propiedad.
    }
    return arrayResult;
}

console.log(concatVariadic(numberArray, stringArray, numberArray, booleanArray));