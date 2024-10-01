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
<<<<<<< Updated upstream
    const response = await fetch('http://localhost:3000/users/signup', {
=======
    const response = await fetch('http://localhost:3000/auth/login', {
>>>>>>> Stashed changes
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
<<<<<<< Updated upstream
    const data = await response.json();
    console.log(data);
    return data;
=======
    return await response.json();
>>>>>>> Stashed changes
}
