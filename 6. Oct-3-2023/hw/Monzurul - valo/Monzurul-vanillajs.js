// ! VanillaJS compatible
//

// Main function to work with
function printEvenNumbers(start, end) {
    // Validation
    if (typeof start !== "number" || typeof end !== "number") {
        console.log("Invalid input");
        return;
    }
    if (start >= end) {
        console.log("Input order is forbidden!");
        return;
    }
    console.log(`Even numbers between ${start} and ${end} are:`);
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

// Output starts
printEvenNumbers(3, 18);
