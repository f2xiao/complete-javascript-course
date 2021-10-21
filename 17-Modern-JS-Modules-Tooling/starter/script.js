////////////////////////////////////////////////
// Exporting and Importing in ES6 Modules

// Importing module
import './shoppingCart.js';
console.log('Importing module');
// // Scope for this file: Module: cart, totalPrice, tq, addToCart(), default() these variables are existed in this case since they are exposed through the keyword export in the ./shoopingCart.js file
/* import * as ShoppingCart from './shoppingCart.js';
console.log(
  ShoppingCart.cart,
  ShoppingCart.cart.length,
  ShoppingCart.cart[ShoppingCart.cart.length - 1]
);

ShoppingCart.default('Keychron', 10);
console.log(
  ShoppingCart.cart,
  ShoppingCart.cart.length,
  ShoppingCart.cart[ShoppingCart.cart.length - 1]
);
ShoppingCart.default('Varmilo', 99);
console.log(
  ShoppingCart.cart,
  ShoppingCart.cart.length,
  ShoppingCart.cart[ShoppingCart.cart.length - 1]
);
console.log(ShoppingCart.totalPrice, ShoppingCart.tq);
ShoppingCart.totalPrice++;
ShoppingCart.tq++;
console.log(ShoppingCart.totalPrice, ShoppingCart.tq); */

// Scope for this file: Module: addToCart, price, tq these variables are existed in this case
/* import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
addToCart('bread', 5);
console.log(price, tq);

console.log(shippingCost); */
/* import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 5);
console.log(cart); */
