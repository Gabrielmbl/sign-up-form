document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('button[type="submit"]');
    const passwordError = document.getElementById('password-error');
    const passwordInput = document.getElementById('pwd');
    const confirmPasswordInput = document.getElementById('confirm-pwd');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission
        const form = document.getElementById('registration-form');
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password !== confirmPassword) {
            passwordError.style.display = 'block'; 
            passwordInput.style.borderColor = 'red'; 
            confirmPasswordInput.style.borderColor = 'red'; 
        } else {
            passwordError.style.display = 'none'; 
            passwordInput.style.borderColor = ''; 
            confirmPasswordInput.style.borderColor = ''; 
            if (form) {
                const formData = new FormData(form);
                const formEntries = Object.fromEntries(formData.entries());
                console.log(formEntries);
            } else {
                console.error('Form not found');
            }
        }
    });
});
