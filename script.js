let form = document.getElementById('form');
let country = document.getElementById('select-country');

function validateEmail() {
    let email = document.getElementById('email').value.trim();
    let validateEmptyEmail = document.getElementById('empty-email');
    let validateNotEmail = document.getElementById('not-email');
    if (email === '') {
        if (typeof(validateEmptyEmail) != 'undefined' && validateEmptyEmail != null) {
            return;
        }

        if (typeof(validateNotEmail) != 'undefined' && validateNotEmail != null) {
            let toRemove = document.getElementById('not-email');
            toRemove.remove();
        }

        document.getElementById('email').style.borderColor = 'red';
        let newDiv = document.createElement('small');
        newDiv.setAttribute('id', 'empty-email');
        newDiv.innerHTML = 'Please enter your email.';
        newDiv.style.color = 'red';
        let toInput = document.getElementsByClassName('no-country');
        toInput[0].appendChild(newDiv);
    }

    else if (!isEmail(email)) {
        if (typeof(validateNotEmail) != 'undefined' && validateNotEmail != null) {
            return;
        }

        if (typeof(validateEmptyEmail) != 'undefined' && validateEmptyEmail != null) {
            let toRemove = document.getElementById('empty-email');
            toRemove.remove();
        }
        
        document.getElementById('email').style.borderColor = 'red';
        let newDiv = document.createElement('small');
        newDiv.setAttribute('id', 'not-email');
        newDiv.innerHTML = 'Please enter a valid email address that consists of only letters, numbers, periods, and the @ sign.';
        newDiv.style.color = 'red';
        let toInput = document.getElementsByClassName('no-country');
        toInput[0].appendChild(newDiv);
    }

    else if (isEmail(email)) {
        if (typeof(validateEmptyEmail) != 'undefined' && validateEmptyEmail != null) {
            let toRemove = document.getElementById('empty-email');
            toRemove.remove();
        }

        if (typeof(validateNotEmail) != 'undefined' && validateNotEmail != null) {
            let toRemove = document.getElementById('not-email');
            toRemove.remove();
        }

        document.getElementById('email').style.borderColor = 'var(--grey)';
    }
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function validatePassword() {
    let password = document.getElementById('password').value.trim();
    let validateEmptyPass = document.getElementById('empty-pass');
    let validateNotValidPass = document.getElementById('not-valid-pass');
    if (password === '') {
        if (validateEmptyPass != null && typeof(validateEmptyPass) != 'undefined') {
            return;
        }

        if (validateNotValidPass != null && typeof(validateNotValidPass) != 'undefined') {
            let toRemove = document.getElementById('not-valid-pass');
            toRemove.remove();
        }

        document.getElementById('password').style.borderColor = 'red';
        let newDiv = document.createElement('small');
        newDiv.setAttribute('id', 'empty-pass');
        newDiv.innerHTML = 'Please enter your password.';
        newDiv.style.color = 'red';
        let toInput = document.getElementsByClassName('no-country');
        toInput[1].appendChild(newDiv);
    }

    else if (!isValid(password)) {
        if (validateNotValidPass != null && typeof(validateNotValidPass) != 'undefined') {
            return;
        }

        if (validateEmptyPass != null && typeof(validateEmptyPass) != 'undefined') {
            let toRemove = document.getElementById('empty-pass');
            toRemove.remove();
        }

        document.getElementById('password').style.borderColor = 'red';
        let newDiv = document.createElement('small');
        newDiv.setAttribute('id', 'not-valid-pass');
        newDiv.innerHTML = 'Invalid password';
        newDiv.style.color = 'red';
        let toInput = document.getElementsByClassName('no-country');
        toInput[1].appendChild(newDiv);
    }

    else if (isValid(password)) {
        if (validateEmptyPass != null && typeof(validateEmptyPass) != 'undefined') {
            let toRemove = document.getElementById('empty-pass');
            toRemove.remove();
        }

        if (validateNotValidPass != null && typeof(validateNotValidPass) != 'undefined') {
            let toRemove = document.getElementById('not-valid-pass');
            toRemove.remove();
        }

        document.getElementById('password').style.borderColor = 'var(--grey)';
    }
}

function isValid(password) {
    if(password.length < 8 || password.length > 20) {
        return false;
    }

    let valid = 0;
    if (/\d/.test(password)) {
        valid++;
    }

    if (/(?=.*[a-z])/.test(password)) {
        valid++;
    }

    if (/(?=.*[A-Z])/.test(password)) {
        valid++;
    }

    if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) {
        valid++;
    }

    if (valid >= 3) {
        return true;
    }

    return false;
}

function confirmPassword() {
    let password = document.getElementById('password').value.trim();
    let confirmPassword = document.getElementById('password-confirm').value.trim();
    let validateEmptyPass = document.getElementById('empty-pass-confirm');
    let validateNotMatchPass = document.getElementById('not-match-pass');
    if (confirmPassword === '') {
        
        if (validateEmptyPass != null && typeof(validateEmptyPass) != 'undefined') {
            return;
        }

        if (validateNotMatchPass != null && typeof(validateNotMatchPass) != 'undefined') {
            let toRemove = document.getElementById('not-match-pass');
            toRemove.remove();
        }

        document.getElementById('password-confirm').style.borderColor = 'red';
        let newDiv = document.createElement('small');
        newDiv.setAttribute('id', 'empty-pass-confirm');
        newDiv.innerHTML = 'Please enter your password.';
        newDiv.style.color = 'red';
        let toInput = document.getElementsByClassName('no-country');
        toInput[2].appendChild(newDiv);
    }

    else if (password != confirmPassword) {
        console.log("masuk");
        if (validateNotMatchPass != null && typeof(validateNotMatchPass) != 'undefined') {
            return;
        }

        if (validateEmptyPass != null && typeof(validateEmptyPass) != 'undefined') {
            let toRemove = document.getElementById('empty-pass-confirm');
            toRemove.remove();
        }

        document.getElementById('password-confirm').style.borderColor = 'red';
        let newDiv = document.createElement('small');
        newDiv.setAttribute('id', 'not-match-pass');
        newDiv.innerHTML = 'Invalid password';
        newDiv.style.color = 'red';
        let toInput = document.getElementsByClassName('no-country');
        toInput[2].appendChild(newDiv);
    }

    else if (password === confirmPassword) {
        if (validateEmptyPass != null && typeof(validateEmptyPass) != 'undefined') {
            let toRemove = document.getElementById('empty-pass-confirm');
            toRemove.remove();
        }

        if (validateNotMatchPass != null && typeof(validateNotMatchPass) != 'undefined') {
            let toRemove = document.getElementById('not-match-pass');
            toRemove.remove();
        }

        document.getElementById('password-confirm').style.borderColor = 'var(--grey)';
    }
}

let submit = document.getElementById('confirm');
let checkbox = document.getElementById('agree');

checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
        document.getElementById('confirm').style.backgroundColor = '#f77c25';
        document.getElementById('confirm').removeAttribute('disabled');
    } else {
        document.getElementById('confirm').style.backgroundColor = '#d6d6d6';
        document.getElementById('confirm').setAttribute('disabled', 'disabled');
    }
});