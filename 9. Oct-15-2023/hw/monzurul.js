const calculateTotal = (cart) => {
    if (cart.length === 0) {
        return "Your cart is empty";
    }

    let total = 0;
    const errors = [];

    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        if (!item.name || !item.price) {
            errors.push(`Invalid cart item in array index: ${i}`);
        } else if (item.price < 0) {
            errors.push(`Negative price in array index: ${i}`);
        } else {
            total += item.price;
        }
    }

    if (errors.length > 0) {
        return { errors };
    }

    return `Total cost: ${total}`;
};

const cart = [
    { name: 'Shirt', price: 20 },
    { name: 'Jeans', price: 50 },
    { name: 'Shoes', price: 30 },
    { name: 'Hat', price: 10 },
    { name: 'Bag', price: 80 },
  
    // ! Uncomment following lines to trigger validation check.
    //{ i: 'g', price: -23 },
    //{ name: 'T-shirt', pice: 24 },
    //{ name: 'Tie', price: -2 }
];

const totalCost = calculateTotal(cart);
console.log(totalCost);