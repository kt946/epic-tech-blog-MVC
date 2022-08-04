// function for sign up form
async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        // check response status
        if (response.ok) {
            console.log('Success!');
        } else {
            alert(response.statusText);
        }
    }
}

// function for login form
async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        // check response status
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

// function to switch to sign up form
function switchToSignUp(event) {
    event.preventDefault();

    document.getElementById('login-form').classList.add('d-none');
    document.getElementById('signup-form').classList.remove('d-none');
}

// function to switch to login form
function switchToLogin(event) {
    event.preventDefault();

    document.getElementById('signup-form').classList.add('d-none');
    document.getElementById('login-form').classList.remove('d-none');
}
  
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
document.querySelector('#signup-link').addEventListener('click', switchToSignUp);
document.querySelector('#login-link').addEventListener('click', switchToLogin);