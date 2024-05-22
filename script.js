class PaymentForm {
  constructor() {
    this.tColorA = document.getElementById("tColorA");
    this.iconA = document.querySelector(".fa-credit-card");
    this.cDetails = document.querySelector(".card-details");

    this.payNowButton = document.getElementById("payNowButton");
    this.cardNumberInput = document.getElementById("number");
    this.expiryDateInput = document.getElementById("e-date");
    this.cvvInput = document.getElementById("cvv");
    this.emailInput = document.getElementById("email");
    this.emailError = document.getElementById("emailError");

    this.addEventListeners();
  }

  doFun() {
    this.tColorA.style.color = "grey";
    this.iconA.style.color = "grey";
    this.cDetails.style.display = "block";
  }

  addEventListeners() {
    this.cardNumberInput.addEventListener(
      "input",
      this.togglePayNowButton.bind(this)
    );
    this.expiryDateInput.addEventListener(
      "input",
      this.togglePayNowButton.bind(this)
    );
    this.cvvInput.addEventListener("input", this.togglePayNowButton.bind(this));
    this.emailInput.addEventListener("input", this.validateEmail.bind(this));
    this.emailInput.addEventListener(
      "input",
      this.togglePayNowButton.bind(this)
    );

    this.cardNumberInput.addEventListener("input", this.allowNumbersOnly);
    this.expiryDateInput.addEventListener("input", this.allowNumbersOnly);
    this.cvvInput.addEventListener("input", this.allowNumbersOnly);

    this.payNowButton.addEventListener(
      "click",
      this.handlePayNowClick.bind(this)
    );

    this.tColorA.addEventListener("click", this.doFun.bind(this));
  }

  allowNumbersOnly(event) {
    event.target.value = event.target.value.replace(/\D/g, "");
  }

  togglePayNowButton() {
    const cardNumber = this.cardNumberInput.value.trim();
    const expiryDate = this.expiryDateInput.value.trim();
    const cvv = this.cvvInput.value.trim();
    const email = this.emailInput.value.trim();

    if (
      cardNumber !== "" &&
      expiryDate !== "" &&
      cvv !== "" &&
      this.isValidEmail(email)
    ) {
      this.payNowButton.disabled = false;
    } else {
      this.payNowButton.disabled = true;
    }
  }

  validateEmail() {
    const email = this.emailInput.value.trim();
    if (!this.isValidEmail(email)) {
      this.emailError.textContent = "Please enter a valid email address";
    } else {
      this.emailError.textContent = "";
    }
  }

  isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  handlePayNowClick() {
    alert("Your payment has been received!");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new PaymentForm();
});
