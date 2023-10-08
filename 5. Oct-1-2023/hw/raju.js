function leapYear(year){
    const remainder = year % 4;
    if (remainder === 0){
        return true;
    }
    else {
        return false;
    }

}

const myLeap = leapYear(1900);
console.log(myLeap);
const myNoLeap = leapYear(2000);
console.log(myNoLeap);

/**
 * 400 - leap year
 * 100 - not leap year
 * 4 - leap year
 */

