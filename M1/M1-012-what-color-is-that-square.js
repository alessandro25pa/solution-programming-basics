let position_Input_User, position_Input_Letter, position_Input_Number, position_Validate;
// Validazione dati immessi
do {
  position_Input_User = prompt("Please insered the position").toUpperCase();
  //console.log(`position_Input_User -->`, position_Input_User);

  position_Validate = /^[A-H][1-8]$/.test(position_Input_User);

  if (position_Validate) {
    
    position_Letter = position_Input_User.slice(0, 1);
    position_Number = position_Input_User.slice(1, 2);
    /*console.log("1", position_Validate);
    console.log(position_Letter);
    console.log(position_Number);*/
  } else {
    alert("\nError! --> You have insered numbers sate not valide. \u{1F648}\n");
    // console.log("2", position_Validate);
  }
}
while (!position_Validate)

/*console.log("3", position_Validate);
console.log("letter -->", position_Letter);
console.log("number -->", position_Number);*/

if (position_Letter == "A" || position_Letter == "C" || position_Letter == "E" || position_Letter == "G") {
  if (position_Number % 2 == 0) {
    alert(`\nThe position "${position_Input_User}" is a WHITE Square.\n`);
    //   console.log(`Modulo -->`, position_Input_Number % 2);
  }
  else {
    alert(`\nThe position "${position_Input_User}" is a BLACK Square.\n`);
    //  console.log(`Modulo -->`, position_Input_Number % 2);
  }
} else if (position_Letter == "B" || position_Letter == "D" || position_Letter == "F" || position_Letter == "H") {
  if (position_Number % 2 == 0) {
    alert(`\nThe position "${position_Input_User}" is a BLACK Square.\n`);
    //   console.log(`Modulo -->`, position_Input_Number % 2);
  }
  else {
    alert(`\nThe position "${position_Input_User}" is a WHITE Square.\n`);
    //   console.log(`Modulo -->`, position_Input_Number % 2);
  }
}