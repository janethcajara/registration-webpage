// Theme toggle
document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Form submission
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (username.length < 3) {
    message.textContent = "Username must be at least 3 characters.";
    message.style.color = "red";
  } else if (!email.includes("@")) {
    message.textContent = "Email must contain '@'.";
    message.style.color = "red";
  } else if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters.";
    message.style.color = "red";
  } else {
    message.textContent = "Registration successful!";
    message.style.color = "green";
    this.reset();
  }
});

// Real-time validation
["username", "email", "password"].forEach(id => {
  document.getElementById(id).addEventListener("input", () => {
    document.getElementById("message").textContent = "";
  });
});

// Reset button
document.getElementById("resetBtn").addEventListener("click", () => {
  document.getElementById("registrationForm").reset();
  document.getElementById("message").textContent = "";
});

//Event handling
const messageEl = document.getElementById("message");
const outerEl = document.getElementById("outer");
const innerBtn = document.getElementById("inner");

// Event listener to the outer div with the capturing phase
outerEl.addEventListener("click", () => {
  messageEl.textContent = "Div Clicked";
}, true); // true for capturing

// Event listener sa inner button with default bubbling phase
innerBtn.addEventListener("click", () => {
  messageEl.textContent = "Button Clicked";
});
