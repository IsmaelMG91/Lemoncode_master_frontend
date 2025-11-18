console.log("-----------------------------------------------");
console.log("2. Concat");/**
 * 2. Concat
Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
 */
const numberArrayConcat = [1, 3, 5, 6, 8];
const stringArrayConcat = ["Juan", "Anna", "Jaime", "Elisabeth"];
const booleanArrayConcat = [true, false, true, true];


const concat = <T, U>(a: T[], b: U[]) => {
    const newArray = [...a, ...b];
    return newArray;
};

console.log(concat(numberArrayConcat, stringArrayConcat));

/**
 * Opcional
Implementa una nueva versión de concat donde se acepten múltiples arrays de entrada (más de 2). No utilices el método Array.prototype.concat.
 */

function concatVariadic<T>() {
    let arrayResult: T[] = [];
    for (const arg in arguments) {
        arrayResult = [...arrayResult, ...arguments[arg]]; //arg apunta a la clave/id, no al valor de la propiedad del objeto arguments, con arguments[arg] obtenemos el valor de la propiedad.
    }
    return arrayResult;
}

console.log(concatVariadic(numberArrayConcat, stringArrayConcat, numberArrayConcat, booleanArrayConcat));