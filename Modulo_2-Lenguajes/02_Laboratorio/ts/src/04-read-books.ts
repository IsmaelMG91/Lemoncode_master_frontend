console.log("-----------------------------------------------");
console.log("4. Read Books");
/**
 * 4. Read Books
Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. 
Un libro es un objeto con title como string y isRead como booleano. 
En caso de no existir el libro devolver false 
TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
 */

interface Books{
    title: String,
    isRead: Boolean,
}

function isBookRead<T extends Array<Books>>(books: T, titleToSearch: String) {

    return books.some(book => book.title === titleToSearch && book.isRead === true) ? //.some() comprueba una condición sobre cada elemento del array y devuelve true cuando lo encuentra.
    true : false;
};


const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Devastación", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
];


console.log(isBookRead(books, "El Imperio Final"));
console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Los Pilares de la Tierra"));