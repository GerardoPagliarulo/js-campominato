/**
 * CAMPO MINATO
 * 
 * Il computer deve generare 16 numeri casuali tra 1 e 100 (numeri vietati).
 * 
 * In seguito deve chiedere all’utente di inserire un numero alla volta, 
 * sempre compreso tra 1 e 100. 
 * L’utente non può inserire più volte lo stesso numero.
 * 
 * Se il numero è presente nella lista dei numeri generati (numeri vietati), 
 * la partita termina, 
 * altrimenti si continua chiedendo all’utente un altro numero.
 * 
 * La partita termina quando il giocatore inserisce un numero “vietato” o 
 * raggiunge il numero massimo possibile di numeri consentiti.
 * 
 * Al termine della partita il software deve comunicare il punteggio, 
 * cioè il numero di volte che l’utente ha inserito un numero consentito.
 * 
 * BONUS
 * 
 * All’inizio il software richiede anche una difficoltà all’utente 
 * che cambia il range di numeri casuali:
 * con difficoltà 0 => tra 1 e 100
 * con difficoltà 1 =>  tra 1 e 80
 * con difficoltà 2=> tra 1 e 50
 */


var numComputer = [];
var listaNumUtente = [];
var punteggio = 0;

// Il computer genera 16 numeri casuali tra 1 e 100 (numeri vietati).
for (var i = 0; i < 16; i++) {
   var numCasualiComputer = numRandom(1, 100);

   numComputer.push(numCasualiComputer);
}
console.log(numComputer); 

// L’utente inserisce un numero alla volta, sempre compreso tra 1 e 100,
// L’utente non può inserire più volte lo stesso numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o 
// raggiunge il numero massimo possibile di numeri consentiti.
for (var i = 0; i < 100 && (!numComputer.includes(numUtente)); i++) {
   var numUtente = parseInt( prompt('Inserire un numero da 1 a 100:') );

   if (!numComputer.includes(numUtente)) {
      punteggio++;
   }

   while (listaNumUtente.includes(numUtente)) {
      numUtente = parseInt( prompt('Numero già inserito. Riprova:') );
      punteggio--;
   }

   listaNumUtente.push(numUtente);
}

if (numComputer.includes(numUtente)) {
   console.log('Hai Perso!');
   console.log('Il tuo punteggio è: ', punteggio);
}
else if (!numComputer.includes(numUtente)) {
   console.log('Hai Vinto!');
   console.log('Il tuo punteggio è: ', punteggio);
}

// Difficoltà



//Funzioni
function numRandom(min, max) {
   return Math.floor( Math.random() * (max - min + 1) ) + min;  
}