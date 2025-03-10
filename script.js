// script.js
document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Basic validation
  if (!email || !password) {
    alert('Please fill in all fields.');
    return;
  }

  // Simulate login (replace with actual API call)
  console.log('Logging in with:', email, password);
  alert('Login successful! Redirecting...');
  // Redirect to dashboard or home page
  window.location.href = 'dashboard.html';
});