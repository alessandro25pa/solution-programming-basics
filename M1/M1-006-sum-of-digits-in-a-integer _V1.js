let numberIn, checkCharacters, array_split_numberIn, number = (sumNumber = i = 0), array_split_numberIn_Conv;
//do-while loop to check that no characters have been inserted
do {
  numberIn = prompt(`Please insered the number -->`);
  // I use the test() function to detect whether the numbers entered contain lowercase or uppercase characters
  checkCharacters = /[a-z,A-Z,`¬¦!",/,£$€%^&*)(=+;:@/'#,><?}{,\,|]/.test(numberIn);
  // if characters are present, I return an 'Error' message.
  if (checkCharacters) {
    alert("\nError! --> You have insered numbers and characters. \u{1F648}\n");
  }
} while (checkCharacters)
// convert the number string into an arrey
array_split_numberIn = numberIn.split("");
//read all the elements of the array and calculate the sum
for (i = 0; i < array_split_numberIn.length; i++) {
  sumNumber += parseInt(array_split_numberIn[i]);
}
// Case where if the variable returns the value "NaN". by means of the isNaN function, which checks whether a variable contains a number (true) or a string (false), I return an error, otherwise I return the value of the sum to the screen.Case where if the variable returns the value "NaN". using the isNaN function, which checks whether a variable contains a number (true) or a string (false), I return an error.
if (isNaN(sumNumber)) {
  alert("\nError! --> You have insered numbers and characters. \u{1F648}\n");
  console.log(isNaN(sumNumber));
} else {
  // replace the "," separating the array, also included in the conversion, with the "+" sign
  array_split_numberIn_Conv = array_split_numberIn.join('+');

  //print the required result on the screen
  alert(`Sum of the input numbers inserted --> ${array_split_numberIn_Conv}=${sumNumber}  \u{1F973}`);
}