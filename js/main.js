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
var numCasualiComputer = 0;

// Selezionare la Difficoltà
var livelloDif = prompt('Scegliere la difficoltà tra:\nFacile\nMedia\nDifficile', 'Facile')
                .toLowerCase()
                .trim();

while (!(livelloDif === 'facile') && !(livelloDif === 'media') && !(livelloDif === 'difficile')) {
   livelloDif = prompt('Scegliere la difficoltà tra:\nFacile\nMedia\nDifficile', 'Facile')
               .toLowerCase()
               .trim();
}

// Il computer genera 16 numeri casuali (numeri vietati).
for (var i = 0; i < 16; i++) {
  var numCasuali = difficolta(livelloDif);
      console.log(numCasuali);

   while (numComputer.includes(numCasuali)) {
      numCasuali = difficolta(livelloDif);
      //console.log(numCasuali);
   }

   numComputer.push(numCasuali);
}
console.log(numComputer); 

// L’utente inserisce un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o 
// raggiunge il numero massimo possibile di numeri consentiti.
for (var i = 0; i < 100 && (!numComputer.includes(numUtente)); i++) {
   var numUtente = parseInt( prompt('Inserire un numero da 1 a 100:') );

   while (listaNumUtente.includes(numUtente)) {
      numUtente = parseInt( prompt('Numero già inserito. Riprova:') );
      punteggio--;
   }

   if (!numComputer.includes(numUtente)) {
      punteggio++;
   }

   listaNumUtente.push(numUtente);
}

if (numComputer.includes(numUtente)) {
   alert('Hai Perso!\nIl tuo punteggio è : ' + punteggio);
}
else if (!numComputer.includes(numUtente)) {
   alert('Hai Vinto!\nIl tuo punteggio è : ' + punteggio);
}


//FUNZIONI
// Generatore di numeri casuali
function numRandom(min, max) {
   return Math.floor( Math.random() * (max - min + 1) ) + min;  
}

// Livello Difficoltà
function difficolta(parola) {
   switch (parola) {
      case 'facile':
         return numCasualiComputer = numRandom(1, 100);
      case 'media':
         return numCasualiComputer = numRandom(1, 80);
      case 'difficile':
         return numCasualiComputer = numRandom(1, 50);
   }
}
