/*
Apartado A
Implementa una función clone que devuelva un objeto clonado a partir de otro:
*/

function clone (source) {
    const clonedObject = {...source};
    return clonedObject;
}

/**
 * Dados dos objetos cualesquiera, implementa una función merge que mezcle uno sobre otro. El objeto resultante debe ser la mezcla de las propiedades del objeto source sobre las del objeto target.

TIP: Usa la función clone del apartado A.
 */

function merge (source, target) {
    const objectResult = {...clone(target), ...clone(source)};
    return objectResult;
}

var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

console.log(merge(a,b));