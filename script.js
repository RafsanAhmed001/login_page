document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get input values
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  // Perform validation (dummy example)
  if (username === 'admin' && password === 'password') {
    alert('Login successful');
    window.location.href = 'portfolio.html';
  } else {
    alert('Invalid credentials');
  }
});
