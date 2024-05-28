class ContactForm {
    constructor(formId) {
      this.form = document.getElementById(formId);
      this.loading = this.form.querySelector('.loading');
      this.errorMessage = this.form.querySelector('.error-message');
      this.sentMessage = this.form.querySelector('.sent-message');
      this.form.addEventListener('submit', (event) => this.handleSubmit(event));
    }
  
    // Method to handle form submission
    handleSubmit(event) {
      event.preventDefault();
      this.clearMessages();
      this.showLoading();
  
      // Form validation
      if (!this.validateForm()) {
        this.showError('Please fill in all fields correctly.');
        this.hideLoading();
        return;
      }
  
      // Simulate an async request (you can replace this with an actual AJAX call)
      setTimeout(() => {
        this.hideLoading();
        this.showSentMessage();
        this.form.reset();
      }, 2000);
    }
  
    // Method to validate the form
    validateForm() {
      let name = this.form.querySelector('#name').value.trim();
      let email = this.form.querySelector('#email').value.trim();
      let subject = this.form.querySelector('#subject').value.trim();
      let message = this.form.querySelector('textarea[name="message"]').value.trim();
  
      if (!name || !email || !subject || !message) {
        return false;
      }
  
      // Basic email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        return false;
      }
  
      return true;
    }
  
    // Method to clear messages
    clearMessages() {
      this.loading.style.display = 'none';
      this.errorMessage.style.display = 'none';
      this.sentMessage.style.display = 'none';
    }
  
    // Method to show loading message
    showLoading() {
      this.loading.style.display = 'block';
    }
  
    // Method to hide loading message
    hideLoading() {
      this.loading.style.display = 'none';
    }
  
    // Method to show error message
    showError(message) {
      this.errorMessage.textContent = message;
      this.errorMessage.style.display = 'block';
    }
  
    // Method to show sent message
    showSentMessage() {
      this.sentMessage.style.display = 'block';
    }
  }
  
  // Initialize the ContactForm class on page load
  document.addEventListener('DOMContentLoaded', () => {
    new ContactForm('contactForm');
  });
  