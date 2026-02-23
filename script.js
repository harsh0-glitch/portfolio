// Contact form validation
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const output = document.getElementById("form-message");

  if (!name || !email || !subject || !message) {
    output.textContent = "Please fill in all fields.";
    return;
  }

  const emailPattern = /^[^\s@]+[^\s@@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    output.textContent = "Please enter a valid email address.";
    return;
  }

  output.textContent = "Message sent successfully!";
  this.reset();
});

// Theme toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
