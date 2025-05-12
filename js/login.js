// login.js

// Get form and error message element
const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

// Mock user data (replace with backend call in real application)
const mockUsers = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "user", password: "password", role: "user" }
];

// Handle form submission
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById("name").value.trim();
  const pwd = document.getElementById("pwd").value;

  // Find matching user
  const user = mockUsers.find(
    u => u.username === name && u.password === pwd
  );

  if (user) {
    // Store session data
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("username", user.username);
    localStorage.setItem("role", user.role);

    // Redirect based on role
    if (user.role === "admin") {
      window.location.href = "home.html"; // Admin dashboard
    } else if (user.role === "user") {
      window.location.href = "user-calendar.html"; // User calendar page
    }
  } else {
    // Show error
    errorMessage.textContent = "Invalid username or password.";
    errorMessage.style.color = "red";
  }
});
