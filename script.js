let tColorA = document.getElementById('tColorA'),
iconA = document.querySelector('.fa-credit-card'),
cDetails = document.querySelector('.card-details');

function doFun(){
    tColorA.style.color = "grey";
    iconA.style.color = "grey";
    cDetails.style.display = "block";
}


// Select the Pay Now button
const payNowButton = document.getElementById('payNowButton');

// Select the card number, expiry date, CVV, and email input fields
const cardNumberInput = document.getElementById('number');
const expiryDateInput = document.getElementById('e-date');
const cvvInput = document.getElementById('cvv');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

// Add event listener to the input fields to check if they are filled
cardNumberInput.addEventListener('input', togglePayNowButton);
expiryDateInput.addEventListener('input', togglePayNowButton);
cvvInput.addEventListener('input', togglePayNowButton);
emailInput.addEventListener('input', validateEmail);
emailInput.addEventListener('input', togglePayNowButton);

// Function to toggle the state of the Pay Now button based on input fields
function togglePayNowButton() {
    const cardNumber = cardNumberInput.value.trim();
    const expiryDate = expiryDateInput.value.trim();
    const cvv = cvvInput.value.trim();
    const email = emailInput.value.trim();

    // Enable the Pay Now button if all input fields are filled and email is valid
    if (cardNumber !== '' && expiryDate !== '' && cvv !== '' && isValidEmail(email)) {
        payNowButton.disabled = false;
    } else {
        // Disable the Pay Now button if any input field is empty or email is invalid
        payNowButton.disabled = true;
    }
}

// Function to validate email format
function validateEmail() {
    const email = emailInput.value.trim();
    if (!isValidEmail(email)) {
        emailError.textContent = 'Please enter a valid email address';
    } else {
        emailError.textContent = '';
    }
}

// Function to check if email is in valid format
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Function to handle the Pay Now button click event
payNowButton.addEventListener('click', function() {
    // Show the alert
    alert("Your payment has been received!");
});


