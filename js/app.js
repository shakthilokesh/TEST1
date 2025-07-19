function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const hint = document.getElementById("hint");
  if (username === "admin" && password === "GYAMA") {
    location.href = "dashboard.html";
  } else {
    hint.textContent = "Hint: The password is GYAMA";
  }
}
