const passwordField = document.getElementById('password');
const togglePassword = document.querySelector('.forgot-password');

togglePassword.addEventListener('click', function () {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    this.textContent = "Hide Password";
  } else {
    passwordField.type = "password";
    this.textContent = "Forgot Password?";
  }
});
