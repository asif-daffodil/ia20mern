//jAMSHED mIRAZ - helping hands
function isLeapYear(year) {

    if (year < 1582 || year > 9999 || !Number.isInteger(year)) {
      return false;
    }
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }
console.log(isLeapYear(2024));
console.log(isLeapYear(2002));
console.log(isLeapYear(1584));
console.log(isLeapYear(10000));

  