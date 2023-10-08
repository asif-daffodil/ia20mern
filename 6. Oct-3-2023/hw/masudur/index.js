const printEvenNumbers = (start, end) => {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

printEvenNumbers(1, 10);


