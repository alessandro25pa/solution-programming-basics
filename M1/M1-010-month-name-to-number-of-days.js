const monthsYear = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
const quantityDays_30 = ["april", "june", "september", "november"];
const quantityDays_31 = ["january", "march", "may", "july", "august", "october", "december"];
const quantityDays_28_29 = ["february"];
let monthUser, i;

//monthUser="february";
monthUser = prompt(`Please enter the name of a month of the year.`);

for (i = 0; i < monthsYear.length; i++) {
  if (monthUser == quantityDays_30[i]) {
    alert(`The month of ${quantityDays_30} has 30 days.`);
  }
  else if (monthUser == quantityDays_31[i]) {
    alert(`The month of ${quantityDays_31[i]} has 31 days.`);
  }
  else if (monthUser == quantityDays_28_29[i]) {
    alert(`The month of ${quantityDays_28_29[i]} has 28 or 29 days to account for leap years.`);
  }
}