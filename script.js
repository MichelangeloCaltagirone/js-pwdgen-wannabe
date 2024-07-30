console.log("it's alive!")

/* 
TRACCIA
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine stampa in console nomecognomecolorepreferito21
*/

// Fase preparatoria
/*-prendo l'elemento dal DOM che mi interessa per lavorare,
in questo caso un tag <span>.
*/
// Fase raccolta dati
/*
Chiedo all'utente, tramite prompt, di inserire i 3 dati richiesti
(nome, cognome, colore preferito) precompilandoli già, e assegnandoli
a variabili (costanti).
*/
// Fase di lavorazione dati 
/*
*/
// Fase di produzione di output
/*
*/


// Fase Prep
const secretPwd = document.getElementById('result');
console.log(secretPwd);


// Fase Racc. Dati
const fisrtName = prompt('Digita il tuo Nome', 'Michelangelo');
console.log(fisrtName);
const lasttName = prompt('Digita il tuo Cognome', 'Caltagirone');
console.log(lasttName);
const favCol = prompt('Digita il tuo colore preferito', 'Viola');
console.log(favCol);