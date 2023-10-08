function printEvenNumbers(start, end) {
    // Ensure start is even if not, increment it by 1
    if (start % 2 !== 0) {
        start++;
    }

    // Use a loop to iterate through all numbers from start to end
    for (let i = start; i <= end; i += 2) {
        // Check if the current number is even
        if (i % 2 === 0) {
            // Print the even number to the console
            console.log(i);
        }
    }
}

// Example usage:
printEvenNumbers(2, 10);
