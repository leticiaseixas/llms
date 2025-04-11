// Login Form Handling
document.querySelector('.login-container form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if(email && password) {
    alert('Login successful! Redirecting to dashboard.');
    window.location.href = 'dashboard.html';
  } else {
    alert('Please enter valid credentials.');
  }
});

// Landing Page Form Submission
document.getElementById('applyForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('fullname').value;
  const feedback = document.getElementById('formFeedback');

  feedback.textContent = `Thank you, ${name}! Your application has been received.`;
  this.reset();
});