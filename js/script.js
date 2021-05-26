/* Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 */

var nome = prompt ('Inserisci il tuo nome');
// console.log(nome);

var cognome = prompt ('Inserisci il tuo cognome');
// console.log(cognome);

var colore = prompt ('Inserisci il tuo colore preferito');
// console.log(colore);

var numero = '21'; //numero statico aggiunto a fine pw

var password = nome + cognome + colore + numero;
// console.log(password);

document.getElementById("psw").innerHTML=password;

