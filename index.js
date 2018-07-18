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
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}.`
  }
}

function total() {
  for (let i = 0; i <= cart.length; i++){
    return (cart[0].itemPrice + cart[1].itemPrice + cart[2].itemPrice); 
  }
}

function removeFromCart(item) {
  if (item.itemName === true) {
    cart.pop()
    return cart; 
  }
  if (item.itemName === false) {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
