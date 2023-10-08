function printEvenNumbers(start, end) {

    if (typeof start !== 'number' || typeof end !== 'number') {
        console.log('Please enter a valid number')
        return;
    }

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }

    }
}
printEvenNumbers(1, 48);