//krishno roy - copy of miraj
function isLeapYear(year) {

    if (!Number.isInteger(year)) {
        return "Invalid Input";
    }
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
console.log(isLeapYear(2020));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
console.log(isLeapYear(20000));
console.log(isLeapYear("ha ha hi hi"));
