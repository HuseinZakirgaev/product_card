import { Modal } from './Modal.js';
import { Form } from './Form.js';

const footerForm = document.querySelector('.footer__form');
const emailInput = footerForm.querySelector('.footer__input');

emailInput.addEventListener('input', () => {
    const email = emailInput.value;

    emailInput.setCustomValidity('');

    if (!email) {
        return;
    }

    if (/[А-Яа-яЁё]/.test(email)) {
        emailInput.setCustomValidity(
            'Email должен содержать только латинские буквы!'
        );
        emailInput.reportValidity();
        return;
    }

    if (/[^A-Za-z0-9._%+-@]/.test(email)) {
        emailInput.setCustomValidity(
            'Email содержит недопустимый символ!'
        );
        emailInput.reportValidity();
        return;
    }

    const atCount = (email.match(/@/g) || []).length;

    if (atCount > 1) {
        emailInput.setCustomValidity(
            'Email должен содержать только один символ @!'
        );
        emailInput.reportValidity();
        return;
    }

    if (email.includes('@')) {
        const [localPart, domain] = email.split('@');

        if (!localPart || domain.startsWith('.') || domain.includes('..')) {
            emailInput.setCustomValidity(
                'Введите корректный адрес электронной почты!'
            );
            emailInput.reportValidity();
            return;
        }
    }
});

const footerFormObj = new Form('footer-form');

footerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = footerFormObj.getData();
    console.log(data);
});


const registrationModal = new Modal('registration-modal');
const registrationButton = document.querySelector('#registration-button');
const registrationForm = document.querySelector('.registration__form');
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const birthDateInput = document.querySelector('#birth-date');
const loginInput = document.querySelector('#login');
const passwordInput = document.querySelector('#password');
const passwordRepeatInput = document.querySelector('#password-repeat');


if (registrationButton) {
    registrationButton.addEventListener('click', () => {
        registrationModal.open();
    });
}

function validateTextInput(input) {
    input.setCustomValidity('');

    if (!input.value) {
        return;
    }

    if (!input.validity.valid) {
        input.setCustomValidity(input.title);
        input.reportValidity();
    }
}

nameInput.addEventListener('input', () => {
    validateTextInput(nameInput);
});

surnameInput.addEventListener('input', () => {
    validateTextInput(surnameInput);
});

loginInput.addEventListener('input', () => {
    validateTextInput(loginInput);
});

passwordInput.addEventListener('input', () => {
    passwordInput.setCustomValidity('');

    const password = passwordInput.value;

    if (!password) {
        checkPasswords();
        return;
    }

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    if (
        password.length >= 8 &&
        hasUppercase &&
        hasLowercase &&
        hasNumber
    ) {
        checkPasswords();
        return;
    }

    if (
        password.length >= 8 &&
        (!hasUppercase || !hasLowercase || !hasNumber)
    ) {
        passwordInput.setCustomValidity(passwordInput.title);
        passwordInput.reportValidity();
    }

    checkPasswords();
});

function checkPasswords() {
    passwordRepeatInput.setCustomValidity('');

    if (!passwordRepeatInput.value) {
        return;
    }

    if (passwordInput.value !== passwordRepeatInput.value) {
        passwordRepeatInput.setCustomValidity('Пароли не совпадают!');
        passwordRepeatInput.reportValidity();
    }
}

passwordInput.addEventListener('input', checkPasswords);
passwordRepeatInput.addEventListener('input', checkPasswords);

birthDateInput.addEventListener('input', () => {
    birthDateInput.setCustomValidity('');

    if (!birthDateInput.value) {
        return;
    }

    const selectedDate = new Date(birthDateInput.value);
    const birthYear = selectedDate.getFullYear();

    if (birthYear > 2012) {
        birthDateInput.setCustomValidity(
            'Регистрация доступна только для лиц старше 14 лет!'
        );
        birthDateInput.reportValidity();
    }
});

let user = null;
const regFormObj = new Form('registration-form'); 

registrationForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    checkPasswords();

    if (!regFormObj.isValid()) {
        return;
    }

    user = regFormObj.getData();

    const passwordData = new TextEncoder().encode(user.password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', passwordData);
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    user.password = hashArray
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join('');

    delete user.passwordRepeat;
    user.createdOn = new Date();

    console.log(user);
    alert('Регистрация прошла успешно!');

    // Очищаем форму и закрываем окно
    regFormObj.reset();
    registrationModal.close();
});