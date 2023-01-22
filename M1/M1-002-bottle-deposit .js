const deposit_SmallConteiner = 0.1;
const deposit_BigConteiner = 0.25;

let SmallConteiner = prompt("Please insert the number of containers small");
let BigConteiner = prompt("Please insert the number of containers big");
let refoundTot =
  SmallConteiner * deposit_SmallConteiner + BigConteiner * deposit_BigConteiner;
console.log(
  `The total reimbursement of the deposited containers is $ ${refoundTot.toFixed(
    2
  )}`
);