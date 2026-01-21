let products = [
  { name: "Phone", price: 15000 },
  { name: "Laptop", price: 50000 },
  { name: "Headphones", price: 2000 }
];

let container = document.getElementById("products");

function display(items) {
  container.innerHTML = "";
  items.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <h3>${p.name}</h3>
        <p>Price: ₹${p.price}</p>
      </div>
    `;
  });
}

function sortProducts(type) {
  if (type === "low")
    products.sort((a, b) => a.price - b.price);
  else if (type === "high")
    products.sort((a, b) => b.price - a.price);

  display(products);
}

display(products);
