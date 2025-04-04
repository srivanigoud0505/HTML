const products = [
  { id: 1, name: "PREMIUM ROSEGOLD ", price: 75, image: "wat1.jpg" },
  { id: 2, name: "FOSSIL NEW EDITION", price: 85, image: "wat4.jpg" },
  { id: 3, name: " PREMIUM PURE METAL ", price: 90, image: "wat5.jpg" },
  { id: 4, name: "G-SHOCK POPULAR EDITION", price: 100, image: "wat6.jpg" },
  { id: 5, name: "CLASSIC GET-BLACK ", price: 65, image: "wat8.jpg" },
  { id: 6, name: "FORMAL LEATHER BELT ", price: 69, image: "wat10.jpg" },
  { id: 7, name: "PREMIUM GOLD SHINE ", price: 70, image: "wat14.jpg" },
  { id: 8, name: "CLASSIC NEW EDITION", price: 96, image: "wat12.jpg" },
  { id: 9, name: "PEMIUM GOLD METAL ", price: 99, image: "wat13.jpg" },
  { id: 10, name: "FEICE DIGITAL WATCH ", price: 92, image: "wat16.jpg" },
  { id: 11, name: "FORSINING NEW EDITION", price: 89, image: "wat15.jpg" },
  { id: 12, name: " QUARTS ANALOG PREMIUM ", price: 89, image: "wat17.jpg" },
];
const cart = JSON.parse(localStorage.getItem('cart')) || [];
const productGrid = document.getElementById('product-grid');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const receiptModal = document.getElementById('receipt-modal');
const receiptItems = document.getElementById('receipt-items');
const receiptTotal = document.getElementById('receipt-total');
function displayProducts() {
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product');
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
    `;
    productGrid.appendChild(productCard);
  });
}
function addToCart(id, name, price ) {
  const existingItem = cart.find(item => item.id === id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }
  updateCart();
}
function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
       ${item.name} -  $${item.price} x ${item.quantity}
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItems.appendChild(cartItem);
  });
  cartTotal.textContent = total.toFixed(2);
  localStorage.setItem('cart', JSON.stringify(cart));
}
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}
function checkout() {
  receiptItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
    const receiptItem = document.createElement('li');
    receiptItem.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
    receiptItems.appendChild(receiptItem);
  });
  receiptTotal.textContent = total.toFixed(2);
  receiptModal.style.display = 'flex';
  cart.length = 0;
  updateCart();
}
function closeModal() {
  receiptModal.style.display = 'none';
}
displayProducts();
updateCart();