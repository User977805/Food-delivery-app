const foods = [
  { name: "Pizza", price: 250, img: "https://cdn.pixabay.com/photo/2024/04/23/09/32/ai-generated-8714508_1280.jpg" },
  { name: "Burger", price: 120, img: "https://cdn.pixabay.com/photo/2023/10/08/13/03/ai-generated-8302143_1280.jpg" },
  { name: "Pasta", price: 180, img: "https://cdn.pixabay.com/photo/2023/11/11/15/49/pasta-8381404_1280.png" },
  { name: "Sandwich", price: 100, img: "https://cdn.pixabay.com/photo/2022/10/07/15/46/sandwich-7505382_1280.jpg" }
];

let cartCount = 0;

function loadMenu() {
  const menu = document.getElementById("menu");
  foods.forEach((food, index) => {
    menu.innerHTML += `
      <div class="card">
        <img src="${food.img}" alt="${food.name}">
        <h3>${food.name}</h3>
        <p>₹${food.price}</p>
        <button onclick="addToCart(${index})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(index) {
  cartCount++;
  document.getElementById("cartCount").innerText = cartCount;
  alert(`${foods[index].name} added to cart!`);
}

function placeOrder() {
  if(cartCount === 0){
    alert("Your cart is empty!");
  } else {
    alert("Order placed successfully! 🎉");
    cartCount = 0;
    document.getElementById("cartCount").innerText = cartCount;
  }
}

loadMenu();
