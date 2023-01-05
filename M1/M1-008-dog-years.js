const yearDogPuppy = 10.5;             // constant declarations
let yearHuman, yearsDogAdult, ageDog;  // variable declarations

//yearHuman = 3;
yearHuman = +prompt("How many human years do you want to convert in dog years?");

if (yearHuman > 0) {  // Control for negative human years
  alert("Error: The years inserted are invalid.");  // appropriate error message if the user enters a negative number
} else {
  if (yearHuman >= 2) { // Control for human years less than 2
    yearsDogAdult = (yearDogPuppy * 2);  // I have obtained the years of a dog that has reached maturity, that is, it is an adult  ---> 2 dog years = 10.5 *2
    ageDog = (yearHuman * 4) + (yearsDogAdult); // I calculated each additional human year as 4 dog years. ---> 1 human year = 4 dog years + adult dog years
    // console.log to display the values of each variable to check for errors   
    console.log("Years Human    ", yearHuman);
    console.log("Year Dog Adult ", yearsDogAdult);
    console.log("Age Dog        ", ageDog);
    // -----------------------------------------------------------------------
    alert(`The adult dog is ${ageDog} years old.`);  // display dog years if greater than or equal to 2
  } else {
    alert(`The puppy dog is ${yearDogPuppy} years old.`);  // display dog years if less than 2
  }
}

/*
# ANNI DEL CANE
- i cani raggiungono l'età adulta in circa 2 anni.
- contare ciascuno dei primi 2 anni umani come 10,5 anni canini,
- contare ogni anno umano come 4 cani

Scrivere un programma che implementi la conversione da
- anni umani in anni canini

Controllare il programma funzioni correttamente per:
- conversioni inferiori a due anni umani
- conversioni di due o più anni umani.

Il programma visualizza un messaggio di errore appropriato se l'utente immette un numero negativo.

# Documentazione
Per questa soluzione di progetto è possibile utilizzare:
- Variabili, espressioni, istruzioni
- Stringhe
# Scadenza
Questo progetto deve essere completato in un massimo di **2 ore**
  */