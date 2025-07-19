function addProduct() {
  const name = prompt("Enter product name:");
  const list = document.getElementById("productList");
  const item = document.createElement("div");
  item.textContent = name;
  list.appendChild(item);
}
