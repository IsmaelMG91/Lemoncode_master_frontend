//Crea una función que reciba una frase en formato string y devuelva la palabra más larga. En caso de haber varias con longitud máxima que devuelva siempre la primera. Ten en cuenta que consideramos una palabra a aquello que esté separado por espacios.

function biggestWord (phrase) {
    let biggestWord;
    let wordLenght = 0;
    const phraseArray = phrase.split(" ");
    phraseArray.forEach(word => {
        if (word.length > wordLenght) {
            biggestWord = word;
            wordLenght = word.length;
        }
    });
    return biggestWord;
}

console.log(biggestWord("Esta frase puede contener muchas palabras"));
console.log(biggestWord("Ejercicios básicos de JavaScript"));