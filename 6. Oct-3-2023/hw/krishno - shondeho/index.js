
const pn = (start, end) => {
    if (typeof start === 'number' && typeof end === 'number' && start < end) {
        for (var i = start; i <= end; i++) {
            if (i % 2 === 0) {
                console.log(i);
            }
        }
    } else {
        console.log("Please provide valid params!");
    }
}

pn(50, 60);