// toonies = 200 - loonies = 100 - quarters = 25 - dimes = 10 - nickels = 5 - penny = 1

let changeIn,
  currentCoin,
  coinCashInConvCents,
  currentChange,
  coinToPrin,
  coinPartDecimal,
  nextChange;
var Penny, Nikel, Dimes, Quarter, Loognes, Toonies;
changeIn = +prompt("Please insert the money  to change:");
//changeIn = 159.69;

currentCoin = 200;
coinCashInConvCents = changeIn * 100; // convert to cent
//if (coinCashInConvCents)
currentChange = coinCashInConvCents / currentCoin;

coinToPrin = Math.trunc(currentChange); // parte intera
coinPartDecimal = currentChange - Math.trunc(currentChange); // parte decimale
nextChange = coinPartDecimal * currentCoin; // resto
//console.log(`Number coin of Toonies 200 --> ${coinToPrin}  Total --> ${Toonies}  `);
Toonies = coinToPrin * currentCoin;
console.log(
  `Number coin of Toonies 200 --> ${coinToPrin}  Total --> ${(
    Toonies / 100
  ).toFixed(2)}  `
);

// 100 - Loognes
currentCoin = 100;
if (nextChange >= currentCoin) {
  currentChange = nextChange / currentCoin;
  coinToPrin = Math.trunc(currentChange);
  coinPartDecimal = currentChange - Math.trunc(currentChange);
  nextChange = coinPartDecimal * currentCoin;

  Loognes = coinToPrin * currentCoin;
  console.log(
    `Number coin of Loognes 100 -->  ${coinToPrin}  Total -->   ${(
      Loognes / 100
    ).toFixed(2)}  `
  );
}

// 25 - Quarter
currentCoin = 25;
if (nextChange >= currentCoin) {
  currentChange = nextChange / currentCoin;
  coinToPrin = Math.trunc(currentChange);
  coinPartDecimal = currentChange - Math.trunc(currentChange);
  nextChange = coinPartDecimal * currentCoin;

  Quarter = coinToPrin * currentCoin;
  console.log(
    `Number coin of Quarter  25 -->  ${coinToPrin}  Total -->   ${(
      Quarter / 100
    ).toFixed(2)}  `
  );
}

// 10 - Dimes
currentCoin = 10;
if (nextChange >= currentCoin) {
  currentChange = nextChange / currentCoin;
  coinToPrin = Math.trunc(currentChange);
  coinPartDecimal = currentChange - Math.trunc(currentChange);
  nextChange = coinPartDecimal * currentCoin;

  Dimes = coinToPrin * currentCoin;
  console.log(
    `Number coin of Dimes    10 -->  ${coinToPrin}  Total -->   ${(
      Dimes / 100
    ).toFixed(2)}  `
  );
}

// 5 - Nikel
currentCoin = 5;
if (nextChange >= currentCoin) {
  currentChange = nextChange / currentCoin;
  coinToPrin = Math.trunc(currentChange);
  coinPartDecimal = currentChange - Math.trunc(currentChange);
  nextChange = coinPartDecimal * currentCoin;

  Nikel = coinToPrin * currentCoin;
  console.log(
    `Number coin of Nikel     5 -->  ${coinToPrin}  Total -->   ${(
      Nikel / 100
    ).toFixed(2)}  `
  );
}

// 1 - Penny
currentCoin = 1;
if (nextChange >= currentCoin) {
  currentChange = nextChange / currentCoin;
  coinToPrin = Math.trunc(currentChange);
  coinPartDecimal = currentChange - Math.trunc(currentChange);
  nextChange = coinPartDecimal * currentCoin;

  Penny = coinToPrin * currentCoin;
  console.log(
    `Number coin of Penny     1 -->  ${coinToPrin}  Total -->   ${(
      Penny / 100
    ).toFixed(2)}`
  );
}
/*
console.log(Penny + Nikel + Dimes + Quarter + Loognes + Toonies);

console.log(Toonies);
console.log(Loognes);
console.log(Quarter);
console.log(Dimes);
console.log(Nikel);
console.log(Penny);

*/
