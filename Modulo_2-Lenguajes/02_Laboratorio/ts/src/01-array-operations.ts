console.log("-----------------------------------------------");
console.log("1. Array Operations");
/**
 * 1. Array operations
Head
Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
 */

const numberArrayOperations = [1, 3, 5, 6, 8];
const stringArrayOperations = ["Juan", "Anna", "Jaime", "Elisabeth"];

const head = <A extends Array<Number | String>>(array: A) => {
    const [firstElement] = array;
    return firstElement;
};

console.log(head(numberArrayOperations));
console.log(head(stringArrayOperations));

/**
 * Tail
Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
 */

const tail = <A extends Array<Number | String>>(array: A) => {
    const [_firstElement, ...tail] = array;
    return tail;
};

console.log(tail(numberArrayOperations));
console.log(tail(stringArrayOperations));

/**
 * Init
Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
 */

const init = <A extends Array<Number | String>>(array: A) => {
    const [...init] = array.slice(0,-1);
    return init;
};

console.log(init(numberArrayOperations));
console.log(init(stringArrayOperations));

/**
 * Last
Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
 */

const last = <A extends Array<Number | String>>(array: A) => {
    const [...last] = array;
    return last.pop();
};

console.log(last(numberArrayOperations));
console.log(last(stringArrayOperations));

console.log(numberArrayOperations);
console.log(stringArrayOperations);
