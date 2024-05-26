//Code for login page
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  // Code for method used 
  authenticate() {
    return true;
  }
}

$(document).ready(function() {
  $('#loginForm').submit(function(e) {
    e.preventDefault();
    const usernameOrEmail = $('#username').val();
    const password = $('#password').val();
    
    // Code for new object using the constructor
    const user = new User(usernameOrEmail, '', password);
    
    // Code to redirect page to homepage
    if (user.authenticate()) {
      window.location.href = 'index.html';
    } else {
      alert('Invalid username/email or password');
    }
  });
});