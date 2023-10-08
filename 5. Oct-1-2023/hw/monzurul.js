function checkLeapYear(year) {
  if (typeof year != 'number') {
    return "The year should be a number";
  }
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 == 0)) {
    return `The year ${year} is a leap-year`;
  } else {
    return `The year ${year} is not a leap-year`;
  }
}


const year = "123";
const isLY = checkLeapYear(year);

console.log(isLY);

