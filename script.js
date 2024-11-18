// Select the form and email input
const form = document.getElementById('forgotPasswordForm');
const emailInput = document.getElementById('email');

// Function to validate email format
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Add event listener for form submission
form.addEventListener('submit', function (event) {
  // Prevent the default form submission
  event.preventDefault();

  const email = emailInput.value.trim();

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Simulate successful form submission
  alert('Password reset link sent to: ' + email);
  // Uncomment the next line to submit the form if server integration exists
  // form.submit();
});
