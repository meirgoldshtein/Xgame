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
    // קריאה לפונקציה ששולחת את הנתונים ל-API
    try {
        const response = await sendLoginData(userData);
        alert('התחברות מוצלחת!');
    }
    catch (error) {
        alert('אירעה שגיאה בזמן ההתחברות.');
    }
});
// פונקציה לשליחת הנתונים ל-API
async function sendLoginData(userData) {
    const response = await fetch('https://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    // בדיקה אם התגובה מהשרת תקינה
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    // קבלת הנתונים מהשרת
    return await response.json();
}
