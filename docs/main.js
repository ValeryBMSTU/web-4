document.addEventListener('DOMContentLoaded', () => {
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const submitBtn = document.getElementById('submitBtn');
    const greetingDiv = document.getElementById('greeting');

    submitBtn.addEventListener('click', () => {
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();

        if (firstName && lastName) {
            greetingDiv.textContent = `привет, ${firstName} ${lastName}!`;
        } else {
            greetingDiv.textContent = 'Пожалуйста, введите имя и фамилию.';
        }
    });
});
