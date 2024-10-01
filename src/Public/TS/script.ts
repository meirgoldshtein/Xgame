const username = document.getElementById('username') as HTMLInputElement;
const password = document.getElementById('password') as HTMLInputElement;
const submitBtn = document.querySelector('.submit-btn') as HTMLButtonElement;

submitBtn.addEventListener('click', async (e: MouseEvent) => {
    e.preventDefault();

    const userData = {
        username: username.value,
        password: password.value
    };

    try {
        const response = await sendLoginData(userData);
        alert('התחברות מוצלחת');
    } catch (error) {
        alert('אירעה שגיאה בזמן ההתחברות');
    }
});

async function sendLoginData(userData: { username: string, password: string }) {
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
