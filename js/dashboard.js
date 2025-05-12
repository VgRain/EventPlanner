// js/dashboard.js

// Check authentication
const isAuthenticated = localStorage.getItem("isAuthenticated");
const role = localStorage.getItem("role");
const username = localStorage.getItem("username");

const menu = document.getElementById("menu");
const dashboardTitle = document.getElementById("dashboardTitle");
const userName = document.getElementById("userName");

// Redirect to login if not authenticated
if (isAuthenticated !== "true") {
  window.location.href = "login.html";
}

// Set username
userName.textContent = username;

// Render menu based on role
if (role === "admin") {
  dashboardTitle.textContent = "Admin Dashboard";
  menu.innerHTML = `
    <li><a href="index.html">Home</a></li>
    <li><a href="venue-list.html">Venue Book List</a></li>
    <li><a href="audience-list.html">Event Audience List</a></li>
    <li><a href="venues.html">Venues</a></li>
    <li><a href="events.html">Events</a></li>
    <li><a href="reports.html">Reports</a></li>
    <li><a href="users.html">Users</a></li>
    <li><a href="settings.html">System Settings</a></li>
  `;
} else if (role === "user") {
  dashboardTitle.textContent = "User Dashboard";
  menu.innerHTML = `
  <li><a href="calendar.html">Calendar</a></li>
  <li><a href="book-venue.html">Book Venue</a></li>
  <li><a href="my-bookings.html">My Bookings</a></li>
  <li><a href="audience-list.html">Audience List</a></li>
`;

} else {
  dashboardTitle.textContent = "Unknown Role";
}

// Logout function
function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}
