"use strict";
const username = document.getElementById('username');
const password = document.getElementById('password');
const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const userData = {
        username: username.value,
        password: password.value
    };
    try {
        const response = await sendLoginData(userData);
        alert('התחברות מוצלחת');
    }
    catch (error) {
        alert('אירעה שגיאה בזמן ההתחברות');
    }
});
async function sendLoginData(userData) {
    const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}
