const nomeUtente = prompt( "Buongiorno, per generare la password sicurissima inserisci il tuo nome", "Il tuo nome");
const cognomeUtente = prompt("Inserisci il tuo cognome", "Il tuo cognome");
const coloreUtente = prompt("Inserisci il tuo colore preferito", "Il tuo colore preferito");

const password = `${nomeUtente}${cognomeUtente}${coloreUtente}#23`

document.getElementById("titolo").innerHTML = `Benvenuto, ${nomeUtente}`
document.getElementById("password").innerHTML = `la tua Password sicurissima è: ${password}`;