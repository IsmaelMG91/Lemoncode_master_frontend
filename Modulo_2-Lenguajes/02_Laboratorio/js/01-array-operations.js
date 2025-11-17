/**
 * 1. Array operations
Head
Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
 */

const numberArray = [1, 3, 5, 6, 8];
const stringArray = ["Juan", "Anna", "Jaime", "Elisabeth"];

const head = (array) => {
    const [firstElement] = array;
    return firstElement;
};

console.log(head(numberArray));
console.log(head(stringArray));

/**
 * Tail
Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
 */

const tail = (array) => {
    const [firstElement, ...tail] = array;
    return tail;
};

console.log(tail(numberArray));
console.log(tail(stringArray));

/**
 * Init
Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
 */

const init = (array) => {
    const [...init] = array.slice(0,-1);
    return init;
};

console.log(init(numberArray));
console.log(init(stringArray));

/**
 * Last
Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
 */

const last = (array) => {
    const [...last] = array;
    return last.pop();
};

console.log(last(numberArray));
console.log(last(stringArray));

console.log(numberArray);
console.log(stringArray);