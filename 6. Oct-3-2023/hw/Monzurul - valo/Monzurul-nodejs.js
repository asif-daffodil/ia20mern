// !! Runs only under nodejs environment

const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Main function to work with
function printEvenNumbers(start, end) {
    if (!start || !end) {
        console.log("\nInvalid input!");
        return;
    }
    if (start >= end) {
        console.log("\nInput order is forbidden!");
        return;
    }
    console.log(`\nEven numbers between ${start} and ${end} are:`);
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

// Output starts with prompting
reader.question("Please enter the start number: ", (start) => {
    reader.question("Please enter the end number: ", (end) => {
        printEvenNumbers(parseInt(start), parseInt(end));
        reader.close();
    });
});
