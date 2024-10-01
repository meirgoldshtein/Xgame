const username = document.getElementById('username') as HTMLInputElement;
const password = document.getElementById('password') as HTMLInputElement;
const submitBtn = document.querySelector('.submit-btn') as HTMLButtonElement;

submitBtn.addEventListener('click', async (e: MouseEvent) => {
    e.preventDefault();

    const userData = {
        username: username.value,
        password: password.value
    };

    // קריאה לפונקציה ששולחת את הנתונים ל-API
    try {
        const response = await sendLoginData(userData);
        alert('התחברות מוצלחת!');
    } catch (error) {
        alert('אירעה שגיאה בזמן ההתחברות.');
    }
});

// פונקציה לשליחת הנתונים ל-API
async function sendLoginData(userData: { username: string, password: string }) {
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
