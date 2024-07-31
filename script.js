/* 
TRACCIA
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine stampa in console nomecognomecolorepreferito21
*/

// Fase preparatoria
/*-prendo l'elemento dal DOM che mi interessa per lavorare,
in questo caso un tag <div>.
*/
// Fase raccolta dati
/*-Chiedo all'utente, tramite prompt, di inserire i 3 dati richiesti
(nome, cognome, colore preferito) precompilandoli già, e assegnandoli
a variabili (costanti).
*/
// Fase di lavorazione dati 
/*-approcio#:creo una variabile let(poi modificabile) e unisco
le const chieste all'utente
-approcio# creo una const dove sommo assieme tutte le stringhe che mi servono
(le 3 date da input dall'Utente, e il suffiso '21', scelto arbitrariamente)
*/
// Fase di produzione di output
/* -approcio#:-cambio il contenuto testuale dell'elemento in pagina con 
la variabile 'somma' creata in lavorazione dati, e gli 'monto'
direttamente il suffisso '21'.
-approcio#:-cambio il contenuto dell'HTML dell'elemento che mi interessa in pagina, 
inserendo una stringa contenente la variabile const (messa in risalto da <strong>)
*/


// Fase Prep
//recupero l'unico elemento di interesse nella pagina html, tramite Id
const resultElement = document.getElementById('result');


// Fase Racc. Dati
// Chiedo all'utente i dati richiesti, tramite prompt, e li assegno a delle const
const fisrtName = prompt('Digita il tuo Nome', 'michelangelo');
console.log(fisrtName); // istruzione commentabile
const lasttName = prompt('Digita il tuo Cognome', 'caltagirone');
console.log(lasttName); // istruzione commentabile
const favCol = prompt('Digita il tuo colore preferito', 'viola');
console.log(favCol);   // istruzione commentabile


// Fase lavorazioni dati

/*
// creo una variabile let sommando le const create con i dati dell'utente
let secretPwd = fisrtName + lasttName + favCol;
console.log(secretPwd);
*/
//metodo alternativo
// creo una const, sommando direttamente tutte le stringhe necessarie
const secretPwd = fisrtName + lasttName + favCol + '21';
console.log(secretPwd);  // istruzione commentabile


// Fase prod. output

// 'Monto' direttamente il suffisso richiesto nel contenuto testuale dell'elemento in pagina
// resultElement.innerText = secretPwd +='21';

// metodo alternativo
/* Mostro la const creata prima in pagina, già compresa di suffisso, con dei backtick per accompagnarla con del testo (cambio solo il
contenuto testuale)*/
//resultElement.innerText = `La tua password super segreta è: ${secretPwd}, salvala mi raccomando!`;
console.log(resultElement);  // istruzione commentabile
// Mostro la const creata prima, inserendola direttamente nel HTML dell'elemento in pagina.
resultElement.innerHTML = `La tua <i>super password segreta</i> è: <strong>${secretPwd}</strong> , salvala mi raccomando!!`;
console.log(resultElement);  // istruzione commentabile
