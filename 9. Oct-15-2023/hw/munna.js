// Md Masudur Rahman Munna

//calculate total price
const calculateTotal = (cart) => {
  if (typeof cart !== "object") {
    return "cart must be object";
  }
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }

  return total;
};

const cart = [
  { name: "Shirt", price: 520 },
  { name: "Jeans", price: 700 },
  { name: "Shoes", price: 2200 },
  { name: "panjabi", price: 3500 },
];

const totalCost = calculateTotal(cart);
console.log(totalCost);
