// Haetaan lomake ja kentät
const form = document.getElementById('registerForm');
const userId = document.getElementById('userId');
const password = document.getElementById('password');
const nameField = document.getElementById('name');
const address = document.getElementById('address');
const country = document.getElementById('country');
const postalCode = document.getElementById('postalCode');
const email = document.getElementById('email');
const gender = document.getElementsByName('gender');
const language = document.getElementsByName('language');

// Virheilmoituskentät
const userIdError = document.getElementById('userIdError');
const passwordError = document.getElementById('passwordError');
const nameError = document.getElementById('nameError');
const addressError = document.getElementById('addressError');
const countryError = document.getElementById('countryError');
const postalCodeError = document.getElementById('postalCodeError');
const emailError = document.getElementById('emailError');
const genderError = document.getElementById('genderError');
const languageError = document.getElementById('languageError');

// Lomakkeen validointifunktio
function validateForm() {
    let isValid = true;

    // Käyttäjä ID -kentän validointi
    if (userId.value.trim() === '') {
        userIdError.textContent = 'Käyttäjä ID on pakollinen';
        isValid = false;
    } else {
        userIdError.textContent = '';
    }

    // Salasanan validointi
    if (password.value.trim() === '' || password.value.length < 6) {
        passwordError.textContent = 'Salasana on pakollinen ja sen on oltava vähintään 6 merkkiä pitkä';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    // Nimi-kentän validointi
    if (nameField.value.trim() === '') {
        nameError.textContent = 'Nimi on pakollinen';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Osoite-kentän validointi
    if (address.value.trim() === '') {
        addressError.textContent = 'Osoite on pakollinen';
        isValid = false;
    } else {
        addressError.textContent = '';
    }

    // Maa-kentän validointi
    if (country.value === '') {
        countryError.textContent = 'Valitse maa';
        isValid = false;
    } else {
        countryError.textContent = '';
    }

    // Postinumeron validointi (esim. vain numerot sallittu)
    if (!/^\d{5}$/.test(postalCode.value)) {
        postalCodeError.textContent = 'Syötä kelvollinen postinumero (5 numeroa)';
        isValid = false;
    } else {
        postalCodeError.textContent = '';
    }

    // Sähköpostin validointi
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
        emailError.textContent = 'Syötä kelvollinen sähköpostiosoite';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Sukupuoli-valinnan validointi
    let genderSelected = false;
    for (const option of gender) {
        if (option.checked) {
            genderSelected = true;
            break;
        }
    }
    if (!genderSelected) {
        genderError.textContent = 'Valitse sukupuoli';
        isValid = false;
    } else {
        genderError.textContent = '';
    }

    // Kieli-valinnan validointi
    let languageSelected = false;
    for (const option of language) {
        if (option.checked) {
            languageSelected = true;
            break;
        }
    }
    if (!languageSelected) {
        languageError.textContent = 'Valitse vähintään yksi kieli';
        isValid = false;
    } else {
        languageError.textContent = '';
    }

    return isValid;
}
