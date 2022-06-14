// Realizziamo un programma che dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.



const userAge = parseInt( prompt('Dimmi la tua età') );

const distance = parseInt( prompt('Dimmi quanti km vorresti percorrere') );

const price =0.21

let finalPrice = price * distance

let disocuntPriceYoung = ((finalPrice * 20) /100);

let disocuntPriceOld = ((finalPrice * 40) /100);

let result

if ( isNaN(userAge) == true) {
        console.log('non hai inserito un valore di ETA\' valido ricarica la pagina');
        
    } else if (isNaN(distance) == true ) {
        console.log('non hai inserito una valore in Km valido ricarica la pagina');
    } else {
        // verifico che il numero inserito sia minore di 18
        if (userAge < 18) {
            result = finalPrice - disocuntPriceYoung
            console.log('Sei minorenne quindi hai diritto al 20% di sconto');
    
        // verifico che il numero sia maggiore di 65
        } else if ( userAge > 65) {
            console.log('Sei anziano quindi hai diritto al 40% di sconto');
            result = finalPrice - disocuntPriceOld
    
        // in tutti gli altri casi
        } else {
            console.log('non sei ne minorenne ne anziano quindi paghi per intero');
            result = finalPrice
        }
    }

    // display the result
    // console.log({result});

    console.log(`${result .toFixed(2)} Euro`);



// const userNumber = parseInt( prompt('Inserisci un numero qualsiasi') );
// const percentage = parseInt( prompt('Inserisci una percentuale') );

// const result = (userNumber * percentage) / 100;

// console.log(`La percentuale ${percentage} di ${userNumber} è: ${result}`);