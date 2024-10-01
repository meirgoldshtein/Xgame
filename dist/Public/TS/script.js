"use strict";
const username = document.getElementById('username');
const password = document.getElementById('password');
const submitBtn = document.querySelector('.submit-btn');
console.log("111")
submitBtn.addEventListener('click', async (e) => {
    console.log("222")
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
    const response = await fetch('http://localhost:3000/users/signup', {
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
