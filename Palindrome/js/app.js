// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma:
// la funzione deve ritornare true se la parola è palindroma
// deve ritornare false se la parola non è palindroma
// alla fine stampate in console un messaggio per dire all’utente il risultato del controllo


// get input word
const userWord = prompt('Type a word to check if it is a palindrome').trim();

// function output
if (isPalindrome(userWord) === true){
    alert('The word ' + userWord + ' is a palindrome.')
} else {
    alert('The word ' + userWord + ' is NOT a palindrome.')
}

// function

function isPalindrome(word){

    //  get lowercase word
    const lowerCaseWord = word.toLocaleLowerCase();

    // reverse word
    let reversedWord = lowerCaseWord[lowerCaseWord.length - 1];

    for  (let i = lowerCaseWord.length - 2; i >= 0; i--) {
        reversedWord += lowerCaseWord[i];
    }

    // check if the word is a palindrome
    if (lowerCaseWord === reversedWord) {
        return true;
    } else {
        return false;
    }
}

