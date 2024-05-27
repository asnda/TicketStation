//Code for login page
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  // Code for method used 
  authenticate() {
    return this.usernameOrEmail === 'user@example.com' && this.password === 'password123';
  }
}

    // Code for new object using the constructor
    class LoginHandler {
      constructor(formId) {
        this.form = document.getElementById(formId);
        this.init();
      }
    
      init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
      }
    
      handleSubmit(e) {
        e.preventDefault();
        const usernameOrEmail = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        const user = new User(usernameOrEmail, password);
        
        if (user.authenticate()) {
          window.location.href = 'index.html';
        } else {
          alert('Invalid username/email or password');
        }
      }
    }
    document.addEventListener('DOMContentLoaded', function() {
      new LoginHandler('loginForm');
    });