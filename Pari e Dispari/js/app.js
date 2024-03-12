
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


allowedNumbers = ['1','2','3','4','5'];

// pari o dispari choice

const pari = document.querySelector('.pari');
const dispari = document.querySelector('.dispari');
let choice = '';

pari.addEventListener('click', function(){
    dispari.classList.add('d-none');
    choice = 'pari';
})

dispari.addEventListener('click', function(){
    pari.classList.add('d-none');
    choice = 'dispari';
})

// set inputNumber-bar length
document.getElementById('inputNumber').setAttribute('size',document.getElementById('inputNumber').getAttribute('placeholder').length);

// run the game

const runTheGame = document.querySelector('.runTheGame');

runTheGame.addEventListener('click', function(){

    console.log('your choice is ' + choice);

    let userNumber = document.getElementById('inputNumber').value.trim();
    console.log('user number ' + userNumber);

    // check inputs
    if (choice == ''){
        alert('You need to choose either pari or dispari');
    } else if (!(allowedNumbers.includes(userNumber))) {
        alert('You need to type a number between 1 and 5');

    } else {
        userNumber =  parseInt(userNumber);
        pcNumber = random1To5();
        console.log('pc number ' + pcNumber);

        const results = document.querySelector('.results');
        resultBox = results.appendChild(document.createElement('div'));
        resultBox.classList.add('col-4','card','p-3');

        if (choice == pariDispari(userNumber,pcNumber)){
            console.log('you win');
            resultBox.innerHTML = generatemessage('Win', choice, userNumber, pcNumber);
        } else {
            console.log('you loose');
            resultBox.innerHTML = generatemessage('Loose', choice, userNumber, pcNumber);
        }
    }
})


// clear to play again

const clear = document.querySelector('.clear');
clear.addEventListener('click', function(){
    dispari.classList.remove('d-none');
    pari.classList.remove('d-none');
    choice = '';
    document.getElementById('inputNumber').value = '';
})



// Functions

// random pcNumber
function random1To5(){
    let num = Math.floor(Math.random()*5);
    return num;
}

// controllo pari o dispari somma 2 num
function pariDispari(num1, num2) {
    if ((num1 + num2) % 2 == 0){
        return 'pari';
    } else {
        return 'dispari';
    }
}


function generatemessage(type, choice, userNumber, pcNumber) {
    return `
    <h4 class="card-title msg-${type}">${type}</h4>
    <p>
        Your choice is ${choice}<br>
        Your number is ${userNumber}<br>
        Pc number is ${pcNumber}<br>
        You ${type}!
    </p>
    `;
}


