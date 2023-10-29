function calculateTotal(cart) {
    let totalCost = 0;
    for (let i = 0; i < cart.length; i++) {
        totalCost += cart[i].price;
    }
    return totalCost;
}
const cart = [
    { name: 'Shirt', price: 200 },
    { name: 'Jeans', price: 30 },
    { name: 'Shoes', price: 50 },
    { name: 'Hat', price: 10 }
];

const totalCost = calculateTotal(cart);
console.log(totalCost);
