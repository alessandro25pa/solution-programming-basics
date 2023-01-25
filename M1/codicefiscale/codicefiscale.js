let nomeUtente = "francesco";
let cognomeUtente = "di bella";
let giornoNascita = "28/04/1987";
let sessoUtente = "M";
let comuneNascita = "catania";
const vocali = ["a","e","i","o","u"];
const comuni = {
  "catania":"C351",
  "firenze":"D612",
  "milano":"F205",
  "roma":"H501"
}

// Conversione Nome
function calculateName(nomeUtente) {
  let trueName = []
  let nomeUtenteSplit = nomeUtente.split(' ').join('');
  for(let i = 0; i < nomeUtente.length; i++){
    if(!vocali.includes(nomeUtenteSplit[i]) && trueName.length < 4){
      trueName.push(nomeUtenteSplit[i])
      }
  }
  trueName.splice(1, 1)
  trueName = trueName.join('')
  return trueName
}
let nomeCF = calculateName(nomeUtente)




//Conversione Cognome

let cognomeUtenteSplit = cognomeUtente.split(' ').join('');
console.log(cognomeUtenteSplit);

let codiceFiscale = "";
let count = 0;

for(let i = 0; i < cognomeUtenteSplit.length; i++){
  
  if(!vocali.includes(cognomeUtenteSplit[i]) && count < 3){
    codiceFiscale += cognomeUtenteSplit[i];
    count++;
  }
  
}

if(codiceFiscale.length < 3){
  for(let i = 0; i < cognomeUtenteSplit.length; i++){
    if(vocali.includes(cognomeUtenteSplit[i]) && codiceFiscale.length < 3){
      codiceFiscale += cognomeUtenteSplit[i];
    }
  }
}

if(codiceFiscale.length < 3){
  for(let i = codiceFiscale.length; i < 3; i++){
    codiceFiscale += "x";
  }
}



//Conversione data di nascita

//Estraggo il giorno
let giornoCF = parseInt(giornoNascita.slice(0, 2));
if(sessoUtente === "F"){
  giornoCF += 40;
}

//Estraggo il mese e converto in Int
let meseCFtoCONV = parseInt(giornoNascita.slice(3,5));
//Conversione mese in lettera corrispondente
let meseCF = "";
if(meseCFtoCONV === 1){
  meseCF = "A";
}else if(meseCFtoCONV === 2){
  meseCF = "B";
}else if(meseCFtoCONV === 3){
  meseCF = "C";
}else if(meseCFtoCONV === 4){
  meseCF = "D";
}else if(meseCFtoCONV === 5){
  meseCF = "E";
}else if(meseCFtoCONV === 6){
  meseCF = "H";
}else if(meseCFtoCONV === 7){
  meseCF = "L";
}else if(meseCFtoCONV === 8){
  meseCF = "M";
}else if(meseCFtoCONV === 9){
  meseCF = "P";
}else if(meseCFtoCONV === 10){
  meseCF = "R";
}else if(meseCFtoCONV === 11){
  meseCF = "S";
}else{
  meseCF = "T";
}


//Estraggo l'anno
let annoCF = giornoNascita.slice(8);

//Conversione Comune



console.log((codiceFiscale + nomeCF + annoCF + meseCF + giornoCF + comuni["catania"]).toUpperCase())

