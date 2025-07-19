function addCategory() {
  const name = prompt("Enter new category name:");
  if (name) {
    const list = document.getElementById("adminContent");
    const item = document.createElement("div");
    item.textContent = name;
    list.appendChild(item);
  }
}
function uploadDeal() {
  alert("Deal image upload coming soon!");
}
