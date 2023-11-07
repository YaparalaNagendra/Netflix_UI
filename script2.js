const emailInput = document.getElementById('emailInput');
const submitButton = document.getElementById('submitButton');
const validationMessage = document.getElementById('validationMessage');

// Regular expression for email validation
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

submitButton.addEventListener('click', function() {
    const email = emailInput.value;

    if (emailRegex.test(email)) {
        validationMessage.textContent = 'Valid email address. Submitting...';
        validationMessage.style.color = 'green';
        window.location.href = "home1.html";
        // Here, you can add code to submit the form or perform other actions.
        // For example: document.getElementById('formId').submit();
    } else {
        validationMessage.textContent = 'Invalid email address. Please enter a valid email.';
        validationMessage.style.color = 'red';
    }
});
