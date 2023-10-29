function calculateTotal(cart) {
    let total = 0;

    for (let item of cart) {
        total += item.price;
    }

    return total;
}

const cart = [
    { name: 'Shirt', price: 20 },
    { name: 'Jeans', price: 30 },
    { name: 'Shoes', price: 50 },
    { name: 'Hat', price: 10 }
];

const totalCost = calculateTotal(cart);
console.log(totalCost);