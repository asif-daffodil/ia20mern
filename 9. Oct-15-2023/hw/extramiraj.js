const cart = [
    { name: 'Shirt', price: 20 },
    { name: 'Jeans', price: 30 },
    { name: 'Shoes', price: 50 },
    { name: 'Hat  ', price: 10 }
  ];
  const total = cart.reduce((fitem, sitem) => fitem + sitem.price, 0);
  console.log("This is your Product:");
  console.log("_________________________________")
  console.log("                                 ")
  console.log("  Product Name"+"          "+"  Price");
  console.log("_____________"+"          "+"____________");
  const productPrice= cart.map(item => console.log("   "+item.name+" ---------------- " +"$"+ item.price+"/="));
  console.log("_________________________________")
  
  console.log("This is your Total cost = " +"$"+ total);
  