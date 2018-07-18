var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 item = { 
   itemName: `${item}`, 
   itemPrice: Math.floor(Math.random() * 101) };
 cart.push(item);
 return `${item.itemName} has been added to your cart.`
}

function viewCart() {
  for (let i = 0; cart.length === 0; ) {
    return "Your shopping cart is empty."
  }
  for (let i = 0; cart.length === 1; ) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  }
  for (let i = 0; cart.length === 2; ){
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
  }
  for (let i = 0; cart.length >= 3; i++){
    return `In your cart, you have ${getCart()[i].itemName} at $${getCart()[i].itemPrice}, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}, and ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`
  }
}

function total() {
  for (i = 0; i < cart.length; i++){
    return itemPrice[i] + itemPrice.length[i];
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
