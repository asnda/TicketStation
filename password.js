// Code for resetting your password
document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('successMessage').style.display = 'block';
});