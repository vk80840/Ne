// Handle Sign Up
document.getElementById("signup").addEventListener("submit", function (e) {
  e.preventDefault();

  const inputs = this.querySelectorAll("input, select");
  const data = {};

  inputs.forEach(input => {
    if (input.type !== "checkbox") {
      data[input.labels[0]?.innerText || input.placeholder] = input.value;
    }
  });

  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  if (password !== confirm) {
    alert("Passwords do not match.");
    return;
  }

  const email = data["Email Address"];
  if (localStorage.getItem(email)) {
    alert("Account already exists.");
    return;
  }

  localStorage.setItem(email, JSON.stringify(data));
  alert("Account created. You can now sign in.");
  showTab("signin", document.querySelector(".tab-btn")); // Switch to Sign In tab
});

// Handle Sign In
document.getElementById("signin").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = this.querySelector('input[type="email"]').value;
  const password = document.getElementById("login-password").value;

  const userData = localStorage.getItem(email);

  if (!userData) {
    alert("Account not found.");
    return;
  }

  const user = JSON.parse(userData);
  if (user["Password"] !== password) {
    alert("Incorrect password.");
    return;
  }

  localStorage.setItem("loggedInUser", email);
  window.location.href = "dashboard.html";
});

// Optional: Logout handling (in dashboard.js)
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}
