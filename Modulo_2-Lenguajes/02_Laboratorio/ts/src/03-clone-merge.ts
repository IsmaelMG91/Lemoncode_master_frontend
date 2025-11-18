console.log("-----------------------------------------------");
console.log("3. Clone Merge");
/**
 * 3. Clone Merge
Clone
Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:
 */

function clone<T extends Object>(source: T) {
    const clonedObject = {...source};
    return clonedObject;
}

/**
 * Implementa una función merge que, dados dos objetos de entrada source y target, 
 * devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

TIP: Puedes usar la función "clone" del apartado A.
 */

function merge<T extends Object, U extends Object>(source: T, target: U) {
    const objectResult = {...target, ...source};
    return objectResult;
}

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

console.log(merge(a,b));