var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function item(itemName, itemPrice) {
    this.itemName = name;
    this.itemPrice = price;
}

function addToCart(item) {
 cart.unshift(item);
 var newItem = { 
   itemName: `${cart[0]}`, 
   itemPrice: Math.floor(Math.random() * 101) };
 return `${itemName} has been added to your cart.`
}

function viewCart() {
  for (let i = 0; i < 1; ) {
    return "Your shopping cart is empty."
  }
  for (let i = 0; i == 1; ) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  }
  for (let i = 0; i == 2; ){
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
  }
  for (let i = 0; i >= 3; i++){
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
